

// Récupération des pièces depuis le fichier JSON
const request = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22');
const data = await request.json();
const resultatData= data.results

console.log(data.description_fr)


  for (let i = 0; i < resultatData.length; i++) {

// Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
// Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
// On crée l’élément img.
    const imageElement = document.createElement("img");
// On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    const evenement = resultatData[i];


    const nomElement = document.createElement("h2");
   nomElement.innerText = evenement.title_fr;

   const prixElement = document.createElement("p");
    prixElement.innerText = evenement.description_fr;

   
  

 

 

// On rattache la balise article à la section Fiches
   sectionFiches.appendChild(pieceElement);

    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
  
  }


