

function askTvSeries(){
    let tvSerie = {
        name : prompt("Entrez le nom de la série"),

        productionYear : prompt("Entrez l'année de production"),

        nbMembers : prompt("Entrez le nombre de membres du cast"),

        /*castMembers[]

        for (let i = 0; i < nbMembers; i++){
            castMembers.push(prompt("Enter the name of a cast member"));
        }*/
    };
}

askTvSeries();

console.log(tvSerie.name);