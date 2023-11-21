

// Récupération des pièces depuis le fichier JSON
const request = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22');
const data = await request.json();
const resultatData= data.results

console.log(data.description_fr)


  for (let i = 0; i < resultatData.length; i++) {

    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");
    const imageElement = document.createElement("img");
    const evenement = resultatData[i];


    const titleElement = document.createElement("h2");
     titleElement.innerText = evenement.title_fr;


    const dateElement = document.createElement("p");
    dateElement.innerText ="Date : " +evenement.daterange_fr;

    const location= document.createElement("p");

    location.innerText = "Adresse : "+ evenement.location_address +" "+evenement.location_postalcode + " "+ evenement.location_city;

    const lien=document.createElement("href")
    lien.innerText="lien"+evenement.canonicalurl;
    
    imageElement.src = resultatData[i].image;
    pieceElement.appendChild(imageElement);

   sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(titleElement);
    pieceElement.appendChild(dateElement);
    pieceElement.appendChild(location);
    pieceElement.appendChild(lien);
  
  }


