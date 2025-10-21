
// Helper function - can be imported and used wherever we need a query
// Can connect to any type of database we want here... The code using this module won't care...

import { SECRET_PGDATABASE, SECRET_PGHOST, SECRET_PGPASSWORD, SECRET_PGUSER, SECRET_PGPORT } from "$env/static/private"
import { Pool, type PoolClient } from "pg"


export const DB = () => {

    const getPool = async (): Promise<PoolClient> => {
        try {
            const pool = new Pool({
                host: SECRET_PGHOST,
                port: parseInt(SECRET_PGPORT),
                user: SECRET_PGUSER,
                password: SECRET_PGPASSWORD,
                database: SECRET_PGDATABASE,
            })
            return await pool.connect()
        } catch(err) {
            console.log(err)
            throw new Error('Unable to connect to database')
        }
        
    }

    const api = {
        query: async (sql: string, params: any[] = []): Promise<Array<any>> => {
            const db = await getPool()
            try {
                const result = await db.query(sql, params)
                return result.rows          
            }catch(err) {
                console.log(err)
                throw new Error('Unable to connect to database')
            }
        }
    }

    return api
}