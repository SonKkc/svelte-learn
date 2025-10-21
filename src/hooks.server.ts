// src/hooks.server.ts
import { DB } from '$lib/database';

export async function handle({ event, resolve }) {
	const session = event.cookies.get('slate_app');
	event.locals.user_id = null;

	if (session) {
		const sql = `
			select session.user_id, session.date_expired 
			from data.session
			inner join data.users on users.user_id = session.user_id
			where session.guid_id = $1
		`;
		const rows = await DB().query(sql, [session]);

		if (rows[0] && rows[0].date_expired > Date.now()) {
			event.locals.user_id = rows[0].user_id;
		}
	}

	return resolve(event);
}
