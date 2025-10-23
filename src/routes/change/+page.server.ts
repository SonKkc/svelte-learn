import { DB } from "$lib/database";
import { fail, redirect, type Actions } from "@sveltejs/kit";


export const actions = {
    change: async ({request, cookies}) => {
        const data = await request.formData()

        const password = data.get('password')
        const password2 = data.get('password2')
        const guid_id = data.get('guid_id')

        if(!password || password.toString().trim() === ''){
            return fail(400, {message:'Please provide an email and password'})
        }
        if(password !== password2){
            return fail(400, {message:'The passwords do not match'})
        }

        // check PW change GUID
        const sql = `select * from data.password_resets where guid_id = $1 and completed = false and date_requested + interval '7 day' > now() `
        const rows = await DB().query(sql, [guid_id])
        if(!rows[0]){
            return fail(400, {message:'Invalid Link'})
        }

        const user_id = rows[0].user_id
        // update password
        await DB().query(`update data.users set hash_password = crypt($1, gen_salt('bf', 8)) where user_id = $2`, [password, user_id])

        // Mark completed so it can not be used again
        await DB().query(`update data.password_resets set completed = true where guid_id = $1`, [guid_id])
        
        // save session get GUID
        const sessionSQL = `insert into data.session(user_id, date_expired) values ($1, now() + interval '8 hour') returning guid_id`
        const sessionRows = await DB().query(sessionSQL, [user_id])
        const session_guid_id = sessionRows[0].guid_id

        // set cookie
        cookies.set('slate_app', session_guid_id, {
            path: '/', //every page
            maxAge: 60*60*8 // 8 hours
        })

        redirect(303, '/')
    }

} satisfies Actions