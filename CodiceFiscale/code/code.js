let opzioniComune = document.getElementById("comune"); 
for(let key in comuni){
    let opzione = document.createElement("option"); 
    opzione.innerHTML = key; 
    opzioniComune.append(opzione); 
}

function main(){
let dataString = document.getElementById("data").value; 
let persona = {
    cognome: document.getElementById("cognome").value, 
    nome: document.getElementById("nome").value, 
    data: new Date(dataString), 
    sesso: document.getElementById("F").checked
}; 

let consonanti = ""; 
let consonantiCognome; 
let consonantiNome; 
let mese; 
let letteraDelMese; 
let numeriAnno; 
let lettere = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"]; 
let codiceFiscale = ""; 




function trovaConsonanti(parola){
      
  for(let i = 0; i < parola.lenght ; i++){
      if(parola.toUpperCase()[i] == "A" || parola.toUpperCase()[i] == "E" || parola.toUpperCase()[i] == "I" || parola.toUpperCase()[i] == "O" || parola.toUpperCase()[i] == "U"){
        continue; 
        }
        else{
            consonanti += parola[i];
            consonantiCognome += consonanti[0] + consonanti[1] + consonanti[2];
            consonantiNome += consonanti[0] + consonanti[2] + consonanti[3]; 
            return consonantiCognome, consonantiNome; 
            
        }
    }
}

function estraiDaCognome(){
   
   trovaConsonanti(cognome); 
   codiceFiscale += consonantiCognome; 
   
   
}

function estraiDaNome(){
    
    trovaConsonanti(nome); 
    codiceFiscale += consonantiNome; 
    
}

function estraiDaAnno(){
    let anno = new Date (dataString).getFullYear();  
    numeriAnno += anno[2] + anno[3]; 
    codiceFiscale += numeriAnno
    return numeriAnno; 
}

function letteraMese(){
    mese = new Date (dataString).getMonth();  
    letteraDelMese = lettere[mese]; 
    
    return letteraDelMese; 
    
}

function estraiDaMese(){
    letteraMese(); 
    codiceFiscale += letteraDelMese; 
    
}

function estraiDaGiorno(){
    let sesso  = document.getElementById("F").checked; 
    let giorno = new Date (dataString).getDate(); 
    if(sesso){
        giorno += 40; 
        
    } 
    codiceFiscale += giorno; 
    return giorno; 
}

function estraiDaComune(){
    let nomeComune = document.getElementById("comune").value;
    let codiceComune = comuni[nomeComune]; 
    codiceFiscale += codiceComune; 
    return codiceComune; 
    
}
estraiDaCognome(); 
estraiDaNome(); 
estraiDaAnno(); 
estraiDaMese(); 
estraiDaGiorno(); 
estraiDaComune(); 
document.getElementById("codiceFiscale").innerHTML = codiceFiscale; 

}