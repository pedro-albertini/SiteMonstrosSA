let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function salvarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function logon() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if (usuario) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}

function adicionar() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    if (usuarios.find(u => u.username === username)) {
        alert('Nome de usuário já existe.');
        return;
    }

    usuarios.push({ username, password });
    salvarUsuarios();
    alert('Usuário adicionado com sucesso!');
}

function atualizar() {
    const username = document.getElementById('login').value;
    const newPassword = document.getElementById('senha').value;

    const usuario = usuarios.find(u => u.username === username);

    if (usuario) {
        usuario.password = newPassword;
        salvarUsuarios();
        alert('Senha atualizada com sucesso!');
    } else {
        alert('Usuário não encontrado.');
    }
}

function deletar() {
    const username = document.getElementById('login').value;
    const index = usuarios.findIndex(u => u.username === username);

    if (index !== -1) {
        usuarios.splice(index, 1);
        salvarUsuarios();
        alert('Usuário deletado com sucesso!');
    } else {
        alert('Usuário não encontrado.');
    }
}

function buscar() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const username = document.getElementById('login').value;
    const usuario = usuarios.find(u => u.username === username);
  
    if (usuario) {
      alert('Usuário encontrado!');
      // Você pode exibir informações adicionais sobre o usuário aqui, se desejar.
    } else {
      alert('Usuário não encontrado.');
    }
  }