import {Application, Request, Response} from 'express';

export default function route(app: Application) {
    app.get('*', (_req: Request, res: Response) => {
        res.status(200).send({
            message: 'Connect success!',
            route: 'Default Route'
        })
    })
}
