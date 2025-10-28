import { google } from 'googleapis';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } from '$env/static/private';

export const GoogleAPI = () => {
    return new google.auth.OAuth2(

        GOOGLE_CLIENT_ID, // Client ID
        GOOGLE_CLIENT_SECRET, // Client Secret
        GOOGLE_REDIRECT_URI // Redirect URI
    )
}