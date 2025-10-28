import { google } from 'googleapis';
import { GoogleAPI } from '$lib/google';
import { json } from '@sveltejs/kit';
export async function GET({cookies}){
    const refresh_token = cookies.get('node_app')
    let user = null

    if(refresh_token){
        const oauth2Client = GoogleAPI();

        oauth2Client.setCredentials({
            refresh_token: refresh_token
        });

        oauth2Client.on('tokens', async (tokens) => {
            if(tokens.refresh_token){
                cookies.set('node_app', tokens.refresh_token, {
                    path: '/',
                    httpOnly: true
                })
            }
        })

        const oauth2 = google.oauth2({
            version: 'v2',
            auth:oauth2Client,
        })

        const response = await oauth2.userinfo.get();

        user = response.data
    }

    return json({success: true, user})
}