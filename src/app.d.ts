// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user_id: number | string | null
			user_data: {
				email?: string
				name?: string
				picture?: string
				auth_type: 'traditional' | 'google'
			} | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
