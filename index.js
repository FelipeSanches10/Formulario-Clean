function cleanText() {
    const password = document.querySelector('#senha');
    const email = document.querySelector('#email');
    password.value = '';
    email.value = '';
};

function registerClient() {
    const cad = document.querySelector('#cadastrar');
    cad.value = alert('Cliente cadastrado ☑');
};