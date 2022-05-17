class UI{
    constructor() {
       this.profile = document.getElementById('profile');
    }

    //Mostar los datos obtenidos
    //en una vista para el cliente

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
        <div class="card mt-2 animated bounceInLeft">
            <img src="${user.avatar_url}" class="card-img-top"/>
            <div class="card-body">
                <h3 class="card-tittle">${user.name} / ${user.login} </h3>
                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                <span class="badge badge-success">Followers: ${user.followers} </span>
                <span class="badge badge-primary">Following: ${user.following} </span>
                <span class="badge badge-warning">Company: ${user.company} </span>
                <span class="badge badge-info d-block">Blog: ${user.blog} </span>
            </div>
        </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass){
        //Creando un div
        const div = document.createElement('div');
        div.className = cssClass;
        //agregando contenido al div
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }

    clearMessage(){
      const alert = document.querySelector('.alert')
      if (alert) {
          alert.remove();
      }
    }

    showRepositories(repositories){
        console.log(repositories);
        let template = '';
        repositories.forEach(repo => {
            template += `
            <div class="card card-body mt-2 animated bounceInUp">
            <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">
                  Language: ${repo.language}
                </span>
                <span class="badge badge-success">
                  forks: ${repo.forks_count}
                </span>
            </div>
            </div>
            </div>
            `
        });
        document.getElementById('repositirios').innerHTML = template;
    }

}

//exportando la clase 
module.exports = UI;