import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        db.run(`CREATE TABLE IF NOT EXISTS pessoas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT, email TEXT, telefone TEXT,
            cep TEXT, logradouro TEXT, numero TEXT,
            complemento TEXT, bairro TEXT, cidade TEXT, estado TEXT
        )`, (err) => {
            if (err) {
                console.error('Erro ao criar a tabela:', err.message);
            } else {
                const insertQuery = `INSERT INTO pessoas (nome, email, telefone, cep, logradouro, numero, complemento, bairro, cidade, estado) VALUES 
                ('Maria da Silva', 'maria@silva.com', '11982223333', '01124060', 'Praça Coronel Fernando Prestes', '999', '', 'Bom Retiro', 'São Paulo', 'SP'),
                ('João da Silva', 'joao@silva.com', '11 988882323', '09931390', 'Avenida Luiz Merenda', '888', '', 'Campanário', 'Diadema', 'SP')`;

                db.run(insertQuery, (err) => {
                    if (err) {
                        console.error('Erro ao inserir dados:', err.message);
                    } else {
                        console.log('Dados iniciais inseridos com sucesso.');
                    }
                });
            }
        });
    }
});

export default db;