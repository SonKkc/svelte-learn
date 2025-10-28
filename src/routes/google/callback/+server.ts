import { redirect } from '@sveltejs/kit';
import { GoogleAPI } from '$lib/google';

export async function GET({url, cookies}){
    const code = url.searchParams.get('code');
    
    const oauth2Client = GoogleAPI()

    const { tokens } = await oauth2Client.getToken(code??'');
    
    oauth2Client.setCredentials(tokens);

    // Lưu tokens dưới dạng JSON để có thể restore đầy đủ
    cookies.set('node_app', JSON.stringify(tokens), {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30 // 30 days
    })

    throw redirect(303, '/')
}