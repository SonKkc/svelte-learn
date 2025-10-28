// src/routes/+layout.server.ts
import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	const publicRoutes = [
		// Auth routes with prefix
		'/auth/login', '/auth/create', '/auth/forgot', '/auth/change', '/auth/register',
	];

	if (!locals.user_id && !publicRoutes.includes(url.pathname)) {
		throw redirect(303, '/auth/login');
	}

	return { 
		user_id: locals.user_id,
		user_data: locals.user_data
	};
}
