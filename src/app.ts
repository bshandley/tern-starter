import * as express from 'express';
import {Request, Response} from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/ApiTest', (req: Request, res: Response) => {
    res.send('The node server says Hello World!!');
});

app.listen(3000);

process.on( 'SIGINT', () => {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit();
});