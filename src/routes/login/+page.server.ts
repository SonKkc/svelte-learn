import { DB } from "$lib/database";
import { fail, redirect, type Actions } from "@sveltejs/kit";


export const actions = {
    login: async ({request, cookies}) => {
        const data = await request.formData()

        const email = data.get('email')
        const password = data.get('password')

        if(!email || email?.toString().trim() === '' || !password || password.toString().trim() === ''){
            return fail(400, {message:'Please provide an email and password'})
        }

        // create user - get ID
        const sql = `select * from data.users where lower(email) = lower($1) and hash_password = crypt($2, hash_password) `
        const rows = await DB().query(sql, [email, password])
        if(!rows[0]){
            return fail(400, {message:'Your username or password is incorreect'})
        }

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