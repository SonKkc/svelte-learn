import { DB } from "$lib/database";
import { fail, redirect, type Actions } from "@sveltejs/kit";


export const actions = {
    create: async ({request, cookies}) => {
        const data = await request.formData()

        const email = data.get('email')
        const password = data.get('password')
        const password2 = data.get('password2')

        if(!email || email?.toString().trim() === '' || !password || password.toString().trim() === ''){
            return fail(400, {message:'Please provide an email and password'})
        }
        if(password !== password2){
            return fail(400, {message:'The passwords do not match'})
        }

        // create user - get ID
        const sql = `insert into data.users (email, hash_password) values ($1, crypt($2, gen_salt('bf', 8))) returning * `
        const rows = await DB().query(sql, [email, password])
        const user_id: number = rows[0].user_id

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