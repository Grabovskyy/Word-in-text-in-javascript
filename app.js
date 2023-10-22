const text = prompt("podaj tekst: ");
const str = prompt("podaj wyraz: ");

let indexy = [];
let idx = text.indexOf(str);

const ile_razy = new RegExp(str, "g");
const ile_razy_jest = text.match(ile_razy);

if(ile_razy_jest?.length>0){
console.log(`Wyraz ${str} wystepuje w tekscie ${ile_razy_jest.length} razy`);
  
while(idx!==-1){

indexy.push(idx);
idx = text.indexOf(str, idx+1);
  
}
console.log(`Wyraz ${str} wystepuje w tekscie w indexach: ${indexy}`);
}else
{ 
    console.log("nie ma xd");
}
