import { MAIL_HOST, MAIL_PASSWORD, MAIL_USER } from "$env/static/private";
import { DB } from "$lib/database";
import { fail, type Actions } from "@sveltejs/kit";
import nodemailer from 'nodemailer'

export const actions = {
    forgot: async ({request}) => {
        const data = await request.formData()

        const email = data.get('email')

        if(!email || email?.toString().trim() === ''){
            return fail(400, {message:'Please provide an email'})
        }

        // create user - get ID
        const sql = `select * from data.users where lower(email) = lower($1)  `
        const rows = await DB().query(sql, [email])
        if(!rows[0]){
            return {success: true}
        }

        const user_id: number = rows[0].user_id

        // create reset request
        const requestRows = await DB().query(`insert into data.password_resets (user_id) values ($1) returning *`, [user_id])
        const reset_guid_id = requestRows[0].guid_id

        // send email...
        const mail = nodemailer.createTransport({
            host: MAIL_HOST,
            port:587,
            secure: false,
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASSWORD,
            },
        })

        let emailBody = '<h3>Reset Your Password</h3>'
        emailBody += '<p>A request was made to reset the password for your account. Click the button below to set a new password.</p>'
        emailBody += `<a href="http://localhost:5173/change?GUID=`+reset_guid_id+`" style="display:block; font-size: 16px; border-radius:4px; background-color:#5e7b8e; width:215px; color:white !important; line-height:46px; text-align:center; text-decoration:none;">Reset Password</a>`

        await mail.sendMail({
            from: {
                name: 'Sevlte-learn DTS',
                address: MAIL_USER
            },
            to: email.toString(),
            subject: 'Sevlte-learn DTS - Reset your password',
            html: emailBody
        })

        return {success:true}
    }

} satisfies Actions