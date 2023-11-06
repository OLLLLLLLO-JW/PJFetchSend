import express from 'express';
const app = express();
import cors from 'cors';
import {getType} from './controller.js'


app.use(cors());

app.get('/type', (req, res) => {
    
    console.log("getting Type")
    getType(req, res);
    
});





app.listen(3000, () => console.log('Example app is listening on port 3000.'));