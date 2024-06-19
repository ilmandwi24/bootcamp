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
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "1";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="1";
    layarKalkulator.innerHTML=value;
    
})
tombolDua.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "2";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="2";
    layarKalkulator.innerHTML=value;
    
})
tombolTiga.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "3";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="3";
    layarKalkulator.innerHTML=value;
    
})
tombolEmpat.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "4";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="4";
    layarKalkulator.innerHTML=value;
    
})
tombolLima.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "5";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="5";
    layarKalkulator.innerHTML=value;
    
})
tombolEnam.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "6";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="6";
    layarKalkulator.innerHTML=value;
    
})
tombolTujuh.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "7";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="7";
    layarKalkulator.innerHTML=value;
    
})
tombolDelapan.addEventListener('click',()=>{
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "8";
        layarKalkulator.innerHTML=value;
        return
    }
    value+="8";
    layarKalkulator.innerHTML=value;
    
})
tombolSembilan.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "9";
        layarKalkulator.innerHTML=value;
        return
    }
    value += "9";
    layarKalkulator.innerHTML = value;

})
tombolKoma.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = ",";
        layarKalkulator.innerHTML=value;
        return
    }
    value += ".";
    layarKalkulator.innerHTML = value;

})
tombolTambah.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "+";
        layarKalkulator.innerHTML=value;
        return
    }

    value += "+";
    layarKalkulator.innerHTML = value;

})
tombolDel.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "0";
        layarKalkulator.innerHTML=value;
        return
    }
    if (layarKalkulator.innerHTML.length==1 ) {
         const str = '-*=+/.';
        const substr = layarKalkulator.innerHTML;



        if(layarKalkulator.innerHTML >= "0" || str.includes(substr)){
            value = "";
            layarKalkulator.innerHTML = "0";
            return
        }

   
    }
    
    value = value.substring(0, value.length - 1);

    layarKalkulator.innerHTML = value;

})
tombolBagi.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "/";
        layarKalkulator.innerHTML=value;
        return
    }
    value += "/";
    layarKalkulator.innerHTML = value;

})
tombolKali.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "x";
        layarKalkulator.innerHTML=value;
        return
    }
    value += "x";
    layarKalkulator.innerHTML = value;

})
tombolKurang.addEventListener('click', () => {
    if (layarKalkulator.innerHTML == "invalid" || layarKalkulator.innerHTML == "Infinity") {
        value = "-";
        layarKalkulator.innerHTML=value;
        return
    }
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
    // alert(this.value);
    switch (this.value) {
        case "1":
            setTheme("theme-one")
            
            break;
        case "2":
            setTheme("theme-two")
           
            break;
        case "3":
            setTheme("theme-three")
            break;
            
        default:
            break;
    }
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

(function () {
    // setTheme('theme-three');
    // console.log(ubahTema)
    if (localStorage.getItem('theme') === 'theme-three') {
        ubahTema.value = "3";
        setTheme('theme-three');
    } else if(localStorage.getItem('theme') === 'theme-two') {
        ubahTema.value = "2";
        setTheme('theme-two');
        
    }
    else {
        ubahTema.value = "1";
        setTheme('theme-one');
    }
 })();



