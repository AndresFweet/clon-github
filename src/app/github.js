class Github{

    constructor(clientId, clientSecret){
        this.client_id = clientId;
        this.client_secret = clientSecret
        this.repos_count = 8;
        this.repos_sort = 'created: asc'
    }

    //obtener acceso ilimitados a los
    //datos alamacenados en github

    async fecthUser(user){
       const userDataRequest =  await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       //pidiendo los datos de repositorio
       //en una nueva api
       const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`);
       //convirtiendo los datos en json legible
       const userData = await userDataRequest.json();
       const repositories = await repositoriesRequest.json()
       return {
           userData,
           repositories
       };
    }

}

//exportando la clase
module.exports = Github;