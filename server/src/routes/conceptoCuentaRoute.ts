import express, { Router } from 'express'

import ConceptoCuentasController from '../controllers/ConceptoCuentasController';

class ConceptoCuentasRoute {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', ConceptoCuentasController.list);
        this.router.get('/:id', ConceptoCuentasController.getOne);
        this.router.post('/', ConceptoCuentasController.create);
        this.router.put('/:id', ConceptoCuentasController.update);
        this.router.delete('/:id', ConceptoCuentasController.delete);
    }

}

export default new ConceptoCuentasRoute().router;

