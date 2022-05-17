const UI = require('./ui');
const Github = require('./github');

const { client_id, client_secret } = require('./config.json');

//Instanciando la clase almacenada en github
//con los parametros almavenados en config.json

const github = new Github(client_id,client_secret);
const ui = new UI();

//Capturando los datos del formulario
//para realizar las busquedas de usuarios

const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSearch = document.getElementById('Search').value;
    if (userSearch !== '') {
        github.fecthUser(userSearch)
            .then(data => {
                if (data.userData.message == 'Not Found') {
                    ui.showMessage('User Not Found','alert alert-danger col-md-12 mt-4')
                }else{
                    ui.showProfile(data.userData);
                    ui.showRepositories(data.repositories);
                }
            })
    }
});