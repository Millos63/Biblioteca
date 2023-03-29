import keys from "./keys";
const sql=require('mssql')
const pool = new sql.ConnectionPool(keys.database)
pool.connect()
export default pool