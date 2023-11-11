

function ChoisirVille(event) { // L'Arg. Event est celui que nous avons dans le HTML.
    event.preventDefault(); // Je prevoit les actions par defaut du Form.

    const villeRecherchee = document.querySelector("#input_choice").value;
    console.log(villeRecherchee);
//Je stocke , et j'affiche la VALEUR SAISIE par le visiteur.

    const urlApi = `https://www.prevision-meteo.ch/services/json/${villeRecherchee}`;
//je remplace la ville donnée d'office par la constante qui contient la valeur du champ de saisie.

    const vaIciLaVilleChoisie = document.getElementById("city_place");
//Je stocke l'endroit ou je veux afficher la VilleRecherchée
    
    vaIciLaVilleChoisie.innerHTML = `${villeRecherchee}`;
// la ville saisie doit aller ici...
    
fetch(urlApi)                    // La Methode > Fetch cherche sur le WEB.
.then((response) => {           //J'attend la reponse à ma requete, et ensuite... j'attend.
    return response.json();     // Le return lance la traduction du json recu en reponse, en Objet lisible.
})
.then ((jsonBanana) => {        // le THEN nous permet d'attendre la traduction, et je la stocke dans cette variable BANANA
//on fait une requete et on attend grace à la Méthode THEN. On chaine les appels de méthodes.
    console.log(jsonBanana);
// j'affiche le json (traduit) reçu.

// Je STOCKE les donnnées recues grâce à l'API dans la CONST ci nommée
const pays = jsonBanana.city_info.country;
const ville = jsonBanana.city_info.name;
const latitude = jsonBanana.city_info.latitude;
const longitude = jsonBanana.city_info.longitude;
const temp = jsonBanana.current_condition.tmp;
const vent = jsonBanana.current_condition.wnd_spd;

const dateJ1 = jsonBanana.fcst_day_1.day_short;
const conditionJ1 = jsonBanana.fcst_day_1.condition;

const icones = jsonBanana.fsct_day_1.icon;

//const icones = `https://prevision-meteo.ch/style/images/icon`;

// https://prevision-meteo.ch/style/images/icon/eclaircies.png


// Je STOCKE dans la variable ci nommée le lieu ou je veux afficher les données.
const iciPays = document.getElementById("country_place");
//const iciVille = document.getElementById("city_place");
const iciLatitude = document.getElementById("latitude_place");
const iciLongitude = document.getElementById("longitude_place");
const iciTemp = document.getElementById("temp_place");
const iciWind = document.getElementById("wind_place");

const iciDateJ1 = document.getElementById("date_place_j1");
const iciConditionJ1 = document.getElementById("condition_place_j1");

// Je dis que les données de l'API vont aller dans ICI... grace à innertext.
iciPays.innerText = `${pays}`;
//iciVille.innerText = `Nous sommes à : ${ville}`;
iciLatitude.innerText = `En haut, ici... "${latitude}" de Latitude nord.`;
iciLongitude.innerText = `Par ici, de ce coté... "${longitude}" de Longitude Est.`;
iciTemp.innerText = `Chaud ou Froid... ${temp} d°. Celcius`;
iciWind.innerText = ` ${vent} km/h`;

iciDateJ1.innerHTML = `${dateJ1}`;
iciConditionJ1.innerHTML = `${conditionJ1}`;

});
}
ChoisirVille()









