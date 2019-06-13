import express, { Router } from 'express';

import empresaController from '../controllers/empresaController';

class EmpresaRoute {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', empresaController.list);
        this.router.get('/:id', empresaController.getOne);
        this.router.post('/', empresaController.create);
        this.router.put('/:id', empresaController.update);
        this.router.delete('/:id', empresaController.delete);
    }

}

export default new EmpresaRoute().router;

