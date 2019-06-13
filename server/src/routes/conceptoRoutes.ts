import express, { Router } from 'express';

import conceptoController from '../controllers/conceptoController';

class ConceptoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', conceptoController.list);
        this.router.get('/:id', conceptoController.getOne);
        this.router.post('/', conceptoController.create);
        this.router.put('/:id', conceptoController.update);
        this.router.delete('/:id', conceptoController.delete);
    }

}

export default new ConceptoRoutes().router;

