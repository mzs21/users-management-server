import { log } from "console";
import { Request, Response } from "express";

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('users server is running');
});


const users = [
    {id: 1, name: 'Snigdho', email: 'snigdho@example.com'},
    {id: 2, name: 'Zilan', email: 'zilan@example.com'},
    {id: 3, name: 'Mashroor', email: 'mashroor@example.com'}
]

app.get('/users', (req: Request, res: Response) => {
    res.send(users);
});

app.post('/users', (req: Request, res: Response) => {
    console.log('user post method');
    console.log(req.body);

    const newUser = req.body;

    newUser.id = users.length + 1;

    users.push(newUser);

    res.send(newUser);
    
    
})

app.listen(port, () =>{
    console.log(`users server is running on port ${port}`);
})