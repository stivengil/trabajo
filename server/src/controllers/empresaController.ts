import { Request, Response } from 'express';


import pool from '../database';

class EmpresaController {

    public async list(req: Request, res: Response): Promise<void> {
        const empresa = await pool.query('SELECT * FROM empresas');
        res.json(empresa);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const empresa = await pool.query('SELECT * FROM empresas WHERE CODIGO = ?', [id]);
        console.log(empresa.length);
        if (empresa.length > 0) {
            return res.json(empresa[0]);
        }
        res.status(404).json({ text: "The empresas doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO empresas set ?', [req.body]);
        res.json({ message: 'je_conceptos Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldempresa = req.body;
        await pool.query('UPDATE empresas set ? WHERE CODIGO = ?', [req.body, id]);
        res.json({ message: "The empresas was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM empresas WHERE CODIGO = ?', [id]);
        res.json({ message: "The empresas was deleted" });
    }
}

const empresaController = new EmpresaController;
export default empresaController;