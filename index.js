const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioRaphael = {
    id: 1,
    nome: 'Raphael',
    idade: 33
};

const usuario = [usuarioRaphael];

app.get('/usuario', (req, res) => {
    res.json(usuario);
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
