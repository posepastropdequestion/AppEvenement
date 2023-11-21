

// Récupération des pièces depuis le fichier JSON
const request = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22');
const data = await request.json();
const resultatData= data.results




function genererData(resultatData) {
  for (let i = 0; i < resultatData.length; i++) {
    const evenement = resultatData[i];
    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");
    const imageElement = document.createElement("img");
    if (evenement.image) { imageElement.src = resultatData[i].image; }
                          else{imageElement.src="https://th.bing.com/th/id/OIP.ODF68Yqk4FnO3-Kcbie-3AHaFl?rs=1&pid=ImgDetMain" }

  


    const titleElement = document.createElement("h2");
     titleElement.innerText = evenement.title_fr;


    const dateElement = document.createElement("p");
    dateElement.innerText ="Date : " +evenement.daterange_fr;

    const location= document.createElement("p");

    location.innerText = "Adresse : "+ evenement.location_address +" "+evenement.location_postalcode + " "+ evenement.location_city;

    const lien=document.createElement("href")
    lien.innerText="lien : voir plus"+evenement.canonicalurl;

    const tarif=document.createElement("p")
    tarif.innerText=evenement.conditions_fr;

    
    

   sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(titleElement);
    pieceElement.appendChild(dateElement);
    pieceElement.appendChild(location);
    pieceElement.appendChild(lien);
    pieceElement.appendChild(tarif);
  
  }
}

genererData(resultatData)

const total=document.querySelector(".total")
const totalAffichage=document.createElement("h3")
totalAffichage.innerText="Total de concert : "+data.total_count
total.appendChild(totalAffichage)


const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {

     const dataOrdonnees = Array.from(resultatData)
     dataOrdonnees.sort(function (a, b) {
         return a.title_fr.localeCompare(b.title_fr);
     });
    document.querySelector(".fiches").innerHTML = "";
    genererData(dataOrdonnees);
  });

const boutonFiltrer = document.querySelector(".btn-decroissant");
boutonFiltrer.addEventListener("click", function () {
   const dataDateCroissant = Array.from(resultatData)
    dataDateCroissant.sort(function (a,b) {
       return a.firstdate_begin.localeCompare(b.firstdate_begin);
   });
  document.querySelector(".fiches").innerHTML = "";
    genererData(dataDateCroissant);
});

const boutonFiltrerPrix = document.querySelector(".btn-filtrer");
  boutonFiltrerPrix.addEventListener("click", function () {
   const dataFiltrees =resultatData.filter(function (resultatData) {
        return resultatData.conditions_fr
   });
  document.querySelector(".fiches").innerHTML = "";
    genererData(dataFiltrees);
    console.log(dataFiltrees);
});




