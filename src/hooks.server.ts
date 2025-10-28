// src/hooks.server.ts

import { DB } from '$lib/database';
import { GoogleAPI } from '$lib/google';
import { google } from 'googleapis';

export async function handle({ event, resolve }) {
	// Kiểm tra session truyền thống
	const session = event.cookies.get('slate_app');
	event.locals.user_id = null;
	event.locals.user_data = null;

	if (session) {
		const sql = `
			select session.user_id, session.date_expired, users.email 
			from data.session
			inner join data.users on users.user_id = session.user_id
			where session.guid_id = $1
		`;
		const rows = await DB().query(sql, [session]);
		if (rows[0] && rows[0].date_expired > Date.now()) {
			event.locals.user_id = rows[0].user_id;
			event.locals.user_data = {
				email: rows[0].email,
				auth_type: 'traditional'
			};
		}
	} else {
		// Kiểm tra đăng nhập Google
		const googleToken = event.cookies.get('node_app');
		if (googleToken) {
			try {
				const oauth2Client = GoogleAPI();
				// Parse tokens từ JSON string
				const tokens = JSON.parse(googleToken);
				oauth2Client.setCredentials(tokens);
				const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
				const { data } = await oauth2.userinfo.get();
				if (data && data.id) {
					event.locals.user_id = data.id;
					event.locals.user_data = {
						email: data.email,
						name: data.name,
						picture: data.picture,
						auth_type: 'google'
					};
				}
			} catch (e) {
				console.error('Google auth error:', e);
				event.locals.user_id = null;
				event.locals.user_data = null;
			}
		}
	}
	return resolve(event);
}
