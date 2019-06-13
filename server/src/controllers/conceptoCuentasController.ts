import { Request, Response } from 'express';


import pool from '../database';

class ConceptoCuentaController {

    public async list(req: Request, res: Response): Promise<void> {
        const cuenta = await pool.query('SELECT * FROM je_conceptocuentas');
        res.json(cuenta);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cuenta = await pool.query('SELECT * FROM je_conceptocuentas WHERE id_conceptocuentas = ?', [id]);
        console.log(cuenta.length);
        if (cuenta.length > 0) {
            return res.json(cuenta[0]);
        }
        res.status(404).json({ text: "The je_conceptocuentas doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO je_conceptocuentas set ?', [req.body]);
        res.json({ message: 'je_conceptocuentas Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldcuenta = req.body;
        await pool.query('UPDATE je_conceptocuentas set ? WHERE id_conceptocuentas = ?', [req.body, id]);
        res.json({ message: "The je_conceptocuentas was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM je_conceptocuentas WHERE id_conceptocuentas = ?', [id]);
        res.json({ message: "The je_conceptocuentas was deleted" });
    }
}

const conceptoCuentaController = new ConceptoCuentaController;
export default conceptoCuentaController;