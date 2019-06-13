import { Request, Response } from 'express';


import pool from '../database';

class CuentasController {

    public async list(req: Request, res: Response): Promise<void> {
        const Cuentas = await pool.query('SELECT * FROM cuentas_contab');
        res.json(Cuentas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Cuentas = await pool.query('SELECT * FROM cuentas_contab WHERE CODIGO = ?', [id]);
        console.log(Cuentas.length);
        if (Cuentas.length > 0) {
            return res.json(Cuentas[0]);
        }
        res.status(404).json({ text: "The cuentas_contab doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO cuentas_contab set ?', [req.body]);
        res.json({ message: 'je_conceptos Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCuentas = req.body;
        await pool.query('UPDATE cuentas_contab set ? WHERE CODIGO = ?', [req.body, id]);
        res.json({ message: "The cuentas_contab was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM cuentas_contab WHERE CODIGO = ?', [id]);
        res.json({ message: "The cuentas_contab was deleted" });
    }
}

const cuentasController = new CuentasController;
export default cuentasController;