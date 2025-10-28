import { DB } from '$lib/database.js'
import { redirect } from '@sveltejs/kit'
import { GoogleAPI } from '$lib/google.js'

export const GET = async ({cookies}) => {

    const session = cookies.get('slate_app')
    if(session){
        await DB().query(`update data.session set date_expired = now() where guid_id = $1`, [session])
    }

    // Xử lý đăng xuất Google OAuth
    const googleRefreshToken = cookies.get('node_app')
    if(googleRefreshToken){
        try {
            const oauth2Client = GoogleAPI()
            // Parse tokens từ JSON string
            const tokens = JSON.parse(googleRefreshToken)
            oauth2Client.setCredentials(tokens)
            // Revoke Google OAuth token
            await oauth2Client.revokeCredentials()
        } catch (error) {
            console.error('Error revoking Google credentials:', error)
        }
    }

    // Xóa cookie phiên đăng nhập thông thường
    cookies.delete('slate_app', {
        path: '/',
        maxAge: 60*60*8 // 8 hours
    })

    // Xóa cookie Google OAuth
    cookies.delete('node_app', {
        path: '/',
        httpOnly: true
    })

    throw redirect(303, '/auth/login')
}