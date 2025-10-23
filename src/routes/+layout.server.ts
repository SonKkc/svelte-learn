// src/routes/+layout.server.ts
import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	const publicRoutes = ['/login', '/create', '/forgot', '/change', '/register'];

	if (!locals.user_id && !publicRoutes.includes(url.pathname)) {
		throw redirect(303, '/login');
	}

	return { user_id: locals.user_id };
}
