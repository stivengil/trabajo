import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import CuentasRoute from './routes/CuentasRoute';
import conceptoCuentaRoute from './routes/conceptoCuentaRoute';
import empresaRoute from './routes/empresaRoute';
import conceptoRoutes from './routes/conceptoRoutes';



class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/conceptos', conceptoRoutes);
        this.app.use('/cuentas', CuentasRoute);
        this.app.use('/conceptocuenta', conceptoCuentaRoute);
        this.app.use('/empresas', empresaRoute);

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();