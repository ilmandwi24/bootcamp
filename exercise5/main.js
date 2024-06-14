let layarKalkulator = document.getElementById("nilai");
let tombolNol = document.getElementById("nol");
let tombolSatu = document.getElementById("satu");
let tombolDua = document.getElementById("dua");
let tombolTiga = document.getElementById("tiga");
let tombolEmpat = document.getElementById("empat");
let tombolLima = document.getElementById("lima");
let tombolEnam = document.getElementById("enam");
let tombolTujuh = document.getElementById("tujuh");
let tombolDelapan = document.getElementById("delapan");
let tombolSembilan = document.getElementById("sembilan");
let tombolDel = document.getElementById("del");
let tombolKurang = document.getElementById("kurang");
let tombolTambah = document.getElementById("tambah");
let tombolBagi = document.getElementById("bagi");
let tombolKali = document.getElementById("kali");
let tombolKoma = document.getElementById("koma");
let tombolHasil = document.getElementById("hasil");
let tombolReset = document.getElementById("reset");
let ubahTema = document.getElementById("ubahTema");


let value="";
tombolNol.addEventListener('click',()=>{
    console.log(layarKalkulator.innerHTML);
    if (layarKalkulator.innerHTML =="0" || layarKalkulator.innerHTML=="invalid"){
        return;
    }
    value+="0";
    layarKalkulator.innerHTML=value;
    
})
tombolSatu.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="1";
    layarKalkulator.innerHTML=value;
    
})
tombolDua.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="2";
    layarKalkulator.innerHTML=value;
    
})
tombolTiga.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="3";
    layarKalkulator.innerHTML=value;
    
})
tombolEmpat.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="4";
    layarKalkulator.innerHTML=value;
    
})
tombolLima.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="5";
    layarKalkulator.innerHTML=value;
    
})
tombolEnam.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="6";
    layarKalkulator.innerHTML=value;
    
})
tombolTujuh.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="7";
    layarKalkulator.innerHTML=value;
    
})
tombolDelapan.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid") return;
    value+="8";
    layarKalkulator.innerHTML=value;
    
})
tombolSembilan.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return;
    value += "9";
    layarKalkulator.innerHTML = value;

})
tombolKoma.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return
    value += ".";
    layarKalkulator.innerHTML = value;

})
tombolTambah.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return

    value += "+";
    layarKalkulator.innerHTML = value;

})
tombolDel.addEventListener('click', () => {
    if(layarKalkulator.innerHTML=="invalid" || layarKalkulator.innerHTML=="0") return;
    if (layarKalkulator.innerHTML.length==1 && layarKalkulator.innerHTML != "0") {
      
        value = "";
        layarKalkulator.innerHTML = "0";
        return
    }
    
    value = value.substring(0, value.length - 1);

    layarKalkulator.innerHTML = value;

})
tombolBagi.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return
    value += "/";
    layarKalkulator.innerHTML = value;

})
tombolKali.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return
    value += "x";
    layarKalkulator.innerHTML = value;

})
tombolKurang.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return
    value += "-";
    layarKalkulator.innerHTML = value;

})
tombolReset.addEventListener('click', () => {

    value = "";
    layarKalkulator.innerHTML = "0";

})
tombolHasil.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid") return
    try {
        
        const output = eval(value.replace(/x/g,'*'));
        
        value = String(output)
        layarKalkulator.innerHTML = value;
    } catch (error) {
      
        value = "invalid"
        layarKalkulator.innerHTML = value;
    }


})


ubahTema.oninput =  function(){
    alert(this.value);
}