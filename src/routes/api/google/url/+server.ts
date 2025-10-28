import { GoogleAPI } from '$lib/google';
import { json } from "@sveltejs/kit";

export async function GET(){
    const oauth2Client = GoogleAPI();
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile'
        ]
    });

    return json({status:200, url});
}