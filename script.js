/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste a inserer les differentes planetes dans un tableau puis a les affiches dans le contenu HTML en leurs donnant des couleurs distincts
*/


// Inserer les Planetes dans un Tableau
let Planetes = ["Mercure","Venus","La Terre","Mars","Jupiter","Saturne","Uranus","Neptune"];

let index1 = 0;

//Afficher les differentes Planetes en les parcourants

for(let Planete of Planetes){
    let VariableBody = document.getElementsByTagName("section")[0];//selection de section
    let CreerDiv = document.createElement("div"); //Creer la balise Div
    VariableBody.appendChild(CreerDiv); //Afficher la balise div
    CreerDiv.textContent = Planete; //Affichage des noms des Planetes dans les differents div
    let VariableDiv = document.getElementsByTagName("div");//selection du div
    let index =0;

    //Attribuer des classes aux div 
    for(let VarDiv of VariableDiv){
        index = index + 1;
        VarDiv.classList.add("planet");              
        VarDiv.classList.add(`planet${index}`);
    }
}


