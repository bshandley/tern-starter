import * as express from 'express';
import {Request, Response} from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

