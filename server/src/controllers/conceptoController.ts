import { Request, Response } from 'express';


import pool from '../database';

class ConceptoController {

    public async list(req: Request, res: Response): Promise<void> {
        const concepto = await pool.query('SELECT * FROM je_conceptos');
        res.json(concepto);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const concepto = await pool.query('SELECT * FROM je_conceptos WHERE id_concepto = ?', [id]);
        console.log(concepto.length);
        if (concepto.length > 0) {
            return res.json(concepto[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO je_conceptos set ?', [req.body]);
        res.json({ message: 'je_conceptos Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldconcepto = req.body;
        await pool.query('UPDATE je_conceptos set ? WHERE id_concepto = ?', [req.body, id]);
        res.json({ message: "The je_conceptos was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM je_conceptos WHERE id_concepto = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
}

const conceptoController = new ConceptoController;
export default conceptoController;