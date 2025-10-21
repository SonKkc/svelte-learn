import { DB } from '$lib/database.js'
import { redirect } from '@sveltejs/kit'

export const GET = async ({cookies}) => {

    const session = cookies.get('slate_app')
    if(session){
        await DB().query(`update data.session set date_expired = now() where guid_id = $1`, [session])
    }

    cookies.delete('slate_app', { // needs to have same settings or the delete won't work
        path: '/', //every page
        maxAge: 60*60*8 // 8 hours
    })

    throw redirect(303, '/login')
}