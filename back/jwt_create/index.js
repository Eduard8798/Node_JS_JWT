import { createServer } from "http";
import dotenv from "dotenv";

//модуль загрузки конфигурации
dotenv.config();
// Получить данные о конфигурации - и если данных нет - назначить по умолчанию
const SERVER_HOST = process.env.SERVER_HOST || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3030;
const SERVER_SECRET = process.env.SECRET || "1q2w3e4r";

// Настройка выдачи ключей
import jwt from "jsonwebtoken"; // Модуль
const JWT_SECRET = process.env.JWT_SECRET || "1q2w3e4r"; // Секретный ключ
const JWT_TTL = process.env.JWT_TTL || "1h"; // Время жизни ключа

const generateToken = (payload) =>{
    const token = jwt.sign(payload,JWT_SECRET,{expiresIn: JWT_TTL});
    return token
}

const httpServer = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const payload ={
        location: 'Mykolaiv'
    }

    const token = generateToken(payload);

    res.end(token);
});

httpServer.listen(SERVER_PORT, SERVER_HOST,() => {
    console.log(`JWT key server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});
