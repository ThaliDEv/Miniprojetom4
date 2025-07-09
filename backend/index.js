const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Configuração do banco
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Tpels41ab@',
  database: 'pratica_fala_ingles'
};

let connection;

async function connectDB() {
  connection = await mysql.createConnection(dbConfig);
  console.log('✅ Conectado ao MySQL');
}

connectDB().catch(err => {
  console.error('❌ Erro ao conectar ao banco:', err);
  process.exit(1);
});

// Criar ou buscar usuário
async function getOrCreateUserId(nomeUsuario) {
  const [rows] = await connection.execute(
    'SELECT id FROM usuarios WHERE nome = ?',
    [nomeUsuario]
  );

  if (rows.length > 0) return rows[0].id;

  const [result] = await connection.execute(
    'INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)',
    [nomeUsuario, `${nomeUsuario}@exemplo.com`, 'senha123']
  );

  return result.insertId;
}

// Criar nova sessão de prática
app.post('/api/sessoes', async (req, res) => {
  const { usuario, nomeSessao } = req.body;

  if (!usuario) {
    return res.status(400).json({ error: 'Usuário é obrigatório' });
  }

  try {
    const userId = await getOrCreateUserId(usuario);

    const [result] = await connection.execute(
      'INSERT INTO sessoes (usuario_id, inicio, status, nome) VALUES (?, NOW(), ?, ?)',
      [userId, 'ativa', nomeSessao || null]
    );

    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error('Erro ao criar sessão:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// Listar todas sessões com dados do usuário
app.get('/api/sessoes', async (req, res) => {
  try {
    const [rows] = await connection.execute(`
      SELECT s.id, u.nome as usuario, s.nome as nomeSessao, s.inicio as dataCriacao
      FROM sessoes s
      JOIN usuarios u ON s.usuario_id = u.id
      ORDER BY s.inicio DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error('Erro ao listar sessões:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// Deletar sessão pelo ID
app.delete('/api/sessoes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [resultado] = await connection.execute('DELETE FROM sessoes WHERE id = ?', [id]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'Sessão não encontrada' });
    }

    res.status(200).json({ message: 'Sessão deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar sessão:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`🚀 API rodando em http://localhost:${port}`);
});
