import express, { Router } from 'express';

import cuentasController from '../controllers/cuentasController';

class CuentaRoute {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', cuentasController.list);
        this.router.get('/:id', cuentasController.getOne);
        this.router.post('/', cuentasController.create);
        this.router.put('/:id', cuentasController.update);
        this.router.delete('/:id', cuentasController.delete);
    }

}

export default new CuentaRoute().router;

