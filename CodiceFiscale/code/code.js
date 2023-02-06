let opzioniComune = document.getElementById("comune"); 
for(let key in comuni){
    let opzione = document.createElement("option"); 
    opzione.innerHTML = key; 
    opzioniComune.append(opzione); 
}

function main(){
let dataString = document.getElementById("data").value; 
let mese; 
let letteraDelMese; 

let lettere = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"]; 
let codice = ""; 

function estraiDaCognome(){
   cognome = document.getElementById("cognome").value;
   cognome = cognome.toUpperCase();
   let lettfin = "";
    let c = 3;
    if(cognome.length==3){
        codice+=cognome;
    }
    else{
        for (let i = 0; i < cognome.length; i++) {
            if(cognome[i] != "A" && cognome[i] != "E" && cognome[i] != "I" && cognome[i] != "O" && cognome[i] != "U"){
                c--;
                lettfin+=cognome[i];
                if(c==0){
                    break;
                }
            }
            
        }
        for (let j = 0; j < cognome.length; j++) {
        if(c>0){
            if(cognome[j] == "A" || cognome[j] == "E" || cognome[j] == "I" || cognome[j] == "O" || cognome[j] == "U"){
            c--;
            lettfin+=cognome[j];
            if(c==0){
                break;
            }
        }
    }
        }
        codice+=lettfin;
    }
}

function estraiDaNome(){
    let lettfin = "";
    nome = document.getElementById("nome").value; 
    nome = nome.toUpperCase(); 
    let c = 4; 
    let z = 0; 
    if(nome.length==3){
        codice+=nome;
    }
    else {
        for (let k = 0; k < nome.length; k++) {
            if(nome[k]!="A" && nome[k]!="E" && nome[k]!="I" && nome[k]!="O" && nome[k]!="U"){
                z++;
        }
    }
    if(z>=4){
        for (let i = 0; i < nome.length; i++) {
            if(nome[i]!="A" && nome[i]!="E" && nome[i]!="I" && nome[i]!="O" && nome[i]!="U"){
                if(c==3){
                    c--;
                    continue;
                }
                lettfin+=nome[i];
                c--;
                if(c==0){
                    break;
                }
            }
        }
        codice+=lettfin;
    }
    else if(z==3){
        c=3;
        for (i = 0; i < nome.length; i++) {
            if(nome[i]!="A" && nome[i]!="E" && nome[i]!="I" && nome[i]!="O" && nome[i]!="U"){
                lettfin+=nome[i];
                c--;
                if(c==0){
                    break;
                }
            }
        }
        codice+=lettfin;
    }
    else if(z<3){
        for (i = 0; i < nome.length; i++) {
            if(nome[i]!="A" && nome[i]!="E" && nome[i]!="I" && nome[i]!="O" && nome[i]!="U"){
                lettfin+=nome[i];
            }
        }
        for (let j = 0; j < nome.length; j++) {
                if(nome[j] == "A" || nome[j] == "E" || nome[j] == "I" || nome[j] == "O" || nome[j] == "U"){
                lettfin+=nome[j];
                break;
            }
        }
        codice+=lettfin;
            }
}
console.log(codice);
}

function estraiDaAnno(){
    let anno = new Date(dataString);
    anno = anno.getFullYear();
    anno = anno.toString();
    let annoString = anno[2] + anno[3];
    codice += annoString;
}

function letteraMese(){
    mese = new Date (dataString).getMonth();  
    letteraDelMese = lettere[mese]; 
    
     letteraDelMese; 
    
}

function estraiDaMese(){
    letteraMese(); 
    codice += letteraDelMese; 
    
}

function estraiDaGiorno(){
    let sesso  = document.getElementById("F").checked; 
    let giorno = new Date (dataString).getDate(); 
    if(document.getElementById("M").checked){
        if(giorno < 10){
            codice += "0";
        }
    }
    else if(sesso){
        giorno += 40; 
    } 
    let giornoString = giorno.toString();
    codice += giornoString;
}

function estraiDaComune(){
    let nomeComune = document.getElementById("comune").value;
    let codiceComune = comuni[nomeComune]; 
    codice += codiceComune; 
     codiceComune; 
    
}

function codiceControllo(){
    let cPari = 0; 
    let cDispari = 0; 
    for(let x = 0; x < codice.length; x+2){
        if(codice[x]=="0"){
            cPari+=1;
        }
        else if(codice[x]=="1"){
            cPari+=0;
        }
        else if(codice[x]=="2"){
            cPari+=5;
        }
        else if(codice[x]=="3"){
            cPari+=7;
        }
        else if(codice[x]=="4"){
            cPari+=9;
        }
        else if(codice[x]=="5"){
            cPari+=13;
        }
        else if(codice[x]=="6"){
            cPari+=15;
        }
        else if(codice[x]=="7"){
            cPari+=17;
        }
        else if(codice[x]=="8"){
            cPari+=19;
        }
        else if(codice[x]=="9"){
            cPari+=21;
        }
        else if(codice[x]=="A"){
            cPari+=1;
        }
        else if(codice[x]=="B"){
            cPari+=0;
        }
        else if(codice[x]=="C"){
            cPari+=5;
        }
        else if(codice[x]=="D"){
            cPari+=7;
        }
        else if(codice[x]=="E"){
            cPari+=9;
        }
        else if(codice[x]=="F"){
            cPari+=13;
        }
        else if(codice[x]=="G"){
            cPari+=15;
        }
        else if(codice[x]=="H"){
            cPari+=17;
        }
        else if(codice[x]=="I"){
            cPari+=19;
        }
        else if(codice[x]=="J"){
            cPari+=21;
        }
        else if(codice[x]=="K"){
            cPari+=2;
        }
        else if(codice[x]=="L"){
            cPari+=4;
        }
        else if(codice[x]=="M"){
            cPari+=18;
        }
        else if(codice[x]=="N"){
            cPari+=20;
        }
        else if(codice[x]=="O"){
            cPari+=11;
        }
        else if(codice[x]=="P"){
            cPari+=3;
        }
        else if(codice[x]=="Q"){
            cPari+=6;
        }
        else if(codice[x]=="R"){
            cPari+=8;
        }
        else if(codice[x]=="S"){
            cPari+=12;
        }
        else if(codice[x]=="T"){
            cPari+=14;
        }
        else if(codice[x]=="U"){
            cPari+=16;
        }
        else if(codice[x]=="V"){
            cPari+=10;
        }
        else if(codice[x]=="W"){
            cPari+=22;
        }
        else if(codice[x]=="X"){
            cPari+=25;
        }
        else if(codice[x]=="Y"){
            cPari+=24;
        }
        else if(codice[x]=="Z"){
            cPari+=23;
        }

    }
    for(let k = 0; k < codice.length; k+2){
        if(codice[x]=="0"){
            cDispari+=0;
        }
        else if(codice[x]=="1"){
            cDispari+=1;
        }
        else if(codice[x]=="2"){
            cDispari+=2;
        }
        else if(codice[x]=="3"){
            cDispari+=3;
        }
        else if(codice[x]=="4"){
            cDispari+=4;
        }
        else if(codice[x]=="5"){
            cDispari+=5;
        }
        else if(codice[x]=="6"){
            cDispari+=6;
        }
        else if(codice[x]=="7"){
            cDispari+=7;
        }
        else if(codice[x]=="8"){
            cDispari+=8;
        }
        else if(codice[x]=="9"){
            cDispari+=9;
        }
        else if(codice[x]=="A"){
            cDispari+=0;
        }
        else if(codice[x]=="B"){
            cDispari+=1;
        }
        else if(codice[x]=="C"){
            cDispari+=2;
        }
        else if(codice[x]=="D"){
            cDispari+=3;
        }
        else if(codice[x]=="E"){
            cDispari+=4;
        }
        else if(codice[x]=="F"){
            cDispari+=5;
        }
        else if(codice[x]=="G"){
            cDispari+=6;
        }
        else if(codice[x]=="H"){
            cDispari+=7;
        }
        else if(codice[x]=="I"){
            cDispari+=8;
        }
        else if(codice[x]=="J"){
            cDispari+=9;
        }
        else if(codice[x]=="K"){
            cDispari+=10;
        }
        else if(codice[x]=="L"){
            cDispari+=11;
        }
        else if(codice[x]=="M"){
            cDispari+=12;
        }
        else if(codice[x]=="N"){
            cDispari+=13;
        }
        else if(codice[x]=="O"){
            cDispari+=14;
        }
        else if(codice[x]=="P"){
            cDispari+=15;
        }
        else if(codice[x]=="Q"){
            cDispari+=16;
        }
        else if(codice[x]=="R"){
            cDispari+=17;
        }
        else if(codice[x]=="S"){
            cDispari+=18;
        }
        else if(codice[x]=="T"){
            cDispari+=19;
        }
        else if(codice[x]=="U"){
            cDispari+=20;
        }
        else if(codice[x]=="V"){
            cDispari+=21;
        }
        else if(codice[x]=="W"){
            cDispari+=22;
        }
        else if(codice[x]=="X"){
            cDispari+=23;
        }
        else if(codice[x]=="Y"){
            cDispari+=24;
        }
        else if(codice[x]=="Z"){
            cDispari+=25;
        }
    }
    let tot = cPari + cDispari; 
    if (tot%26==0) {
        codice+="A";
    }
    else if (tot%26==1) {
        codice+="B";
    }
    else if (tot%26==2) {
        codice+="C";
    }
    else if (tot%26==3) {
        codice+="D";
    }
    else if (tot%26==4) {
        codice+="E";
    }
    else if (tot%26==5) {
        codice+="F";
    }
    else if (tot%26==6) {
        codice+="G";
    }
    else if (tot%26==7) {
        codice+="H";
    }
    else if (tot%26==8) {
        codice+="I";
    }
    else if (tot%26==9) {
        codice+="J";
    }
    else if (tot%26==10) {
        codice+="K";
    }
    else if (tot%26==11) {
        codice+="L";
    }
    else if (tot%26==12) {
        codice+="M";
    }
    else if (tot%26==13) {
        codice+="N";
    }
    else if (tot%26==14) {
        codice+="O";
    }
    else if (tot%26==15) {
        codice+="P";
    }
    else if (tot%26==16) {
        codice+="Q";
    }
    else if (tot%26==17) {
        codice+="R";
    }
    else if (tot%26==18) {
        codice+="S";
    }
    else if (tot%26==19) {
        codice+="T";
    }
    else if (tot%26==20) {
        codice+="U";
    }
    else if (tot%26==21) {
        codice+="V";
    }
    else if (tot%26==22) {
        codice+="W";
    }
    else if (tot%26==23) {
        codice+="X";
    }
    else if (tot%26==24) {
        codice+="Y";
    }
    else if (tot%26==25) {
        codice+="Z";
    }
}



estraiDaCognome(); 
estraiDaNome(); 
estraiDaAnno(); 
estraiDaMese(); 
estraiDaGiorno(); 
estraiDaComune(); 
codiceControllo(); 
document.getElementById("codiceFiscale").innerHTML = codice; 

}
