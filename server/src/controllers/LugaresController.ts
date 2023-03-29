import { Request,response,Response } from 'express';
import  pool  from "../database";

class LugaresControllers
{
    //GET
    public async index(req:Request, res:Response)
    {
        const lugares = await pool.query('select * from Lugares');
        res.json(lugares);
    }


    public async create(req: Request, res: Response): Promise<void>
    {
        await pool.query(`insert into Lugares values ('${req.body.Lugar}')`);
        console.log(req);
        res.json({'Text':'Lugar creado'});
    }

    public async delete(req:Request, res:Response):Promise<void>
    {
        const {id} = req.params;
        await pool.query(`delete from Lugares where Id_Lugar = ('${id}')`);
        
        res.json({Text:'Borrando Lugar ' + id });
    }

    public async update(req: Request, res: Response): Promise<void>
    {
        const {id} = req.params;
        await pool.query(`update Lugares set Lugar = '${req.body.Lugar}' where Id_Lugar = ${id}`);
        res.json({'Text':'Lugar actualizado: ' + id});
    }

    public async detail(req:Request,res:Response): Promise<any>
    {
        const {id} = req.params;
        const lugar = await pool.query(`select * from Lugares where Id_Lugar = ${id}`);
        if(lugar.rowsAffected > 0)
        {
            console.log(lugar.recordset[0]);
            return res.json(lugar.recordset[0])
        }
        else
        {
            res.status(404).json({Text:'Lugar no existe 404 not found' + req.params.id })
        }
    }
}

export const lugaresController = new LugaresControllers();
export default lugaresController;