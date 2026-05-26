const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "API Backend Funcionando en EKS!" });
});

app.post('/login', (req, res) => {
    const { user, password } = req.body;
    if (user === "gabo" && password === "devops2026") {
        res.json({ success: true, token: "fake-jwt-token" });
    } else {
        res.status(401).json({ success: false, message: "Credenciales incorrectas" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
