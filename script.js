const urlApi = "https://www.prevision-meteo.ch/services/json/Bagnolet";

fetch(urlApi) //je cherche autour de moi.
.then((response) => { //J'attend la reponse à ma requete.
    return response.json(); // Le return lance la traduction du json recu en Objet lisible.
})
.then ((responseJsonBanana) => { // le THEN nous permet d'attendre la traduction, et je la stocke dans cette variable BANANA
    console.log(responseJsonBanana);
});
//on fait une requete et on attend grace à la Méthode THEN. On chaine les appels de méthodes.