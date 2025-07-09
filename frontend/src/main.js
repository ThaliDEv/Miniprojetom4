const form = document.getElementById('sessionForm');
const messageDiv = document.getElementById('message');
const historicoDiv = document.getElementById('historico');

// Inicia formulário
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const usuario = form.usuario.value.trim();
  const nomeSessao = form.nomeSessao.value.trim();

  if (!usuario) {
    mostrarMensagem('Por favor, digite seu nome.', 'red');
    return;
  }

  mostrarMensagem('Iniciando sessão...', '#004aad');

  try {
    const response = await fetch('http://localhost:3001/api/sessoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, nomeSessao })
    });

    if (response.ok) {
      const data = await response.json();
      mostrarMensagem(`✅ Sessão iniciada com sucesso! ID: ${data.id}`, 'green');
      form.reset();
      carregarHistorico();
    } else {
      throw new Error('Erro ao iniciar a sessão');
    }
  } catch (error) {
    mostrarMensagem('Erro na requisição: ' + error.message, 'red');
  }
});

// Função para deletar sessão
async function deletarSessao(id) {
  if (!confirm('Deseja realmente deletar essa sessão?')) return;

  mostrarMensagem('Deletando sessão...', '#004aad');

  try {
    const res = await fetch(`http://localhost:3001/api/sessoes/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      mostrarMensagem('✅ Sessão deletada com sucesso!', 'green');
      carregarHistorico();
    } else {
      mostrarMensagem('Erro ao deletar sessão.', 'red');
    }
  } catch {
    mostrarMensagem('Erro na requisição ao deletar.', 'red');
  }
}

// Carrega o histórico de sessões
async function carregarHistorico() {
  historicoDiv.innerHTML = '<p style="text-align:center;">🔄 Carregando sessões...</p>';

  try {
    const res = await fetch('http://localhost:3001/api/sessoes');
    if (!res.ok) throw new Error('Erro ao buscar histórico');

    const data = await res.json();
    historicoDiv.innerHTML = '';

    if (data.length === 0) {
      historicoDiv.textContent = 'Nenhuma sessão encontrada.';
      return;
    }

    data.forEach(sessao => {
      const item = document.createElement('div');
      item.className = 'sessao-item';

      const info = document.createElement('div');
      info.className = 'sessao-info';
      info.textContent = `ID: ${sessao.id} - Usuário: ${sessao.usuario} - Sessão: ${sessao.nomeSessao || 'Sem nome'} - Criada em: ${new Date(sessao.dataCriacao).toLocaleString()}`;

      const btnDel = document.createElement('button');
      btnDel.className = 'btn-deletar';
      btnDel.textContent = 'Deletar';
      btnDel.onclick = () => deletarSessao(sessao.id);

      item.appendChild(info);
      item.appendChild(btnDel);

      historicoDiv.appendChild(item);
    });
  } catch (error) {
    historicoDiv.innerHTML = '';
    console.error(error);
    mostrarMensagem('Erro ao carregar histórico.', 'red');
  }
}

// Função para exibir mensagens
function mostrarMensagem(texto, cor = '#004aad') {
  messageDiv.textContent = texto;
  messageDiv.style.color = cor;
}

window.addEventListener('load', carregarHistorico);

