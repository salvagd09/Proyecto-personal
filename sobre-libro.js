document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth>800){
        document.querySelectorAll("header .titulo_boton").forEach((elemento,index)=>{
            elemento.style.opacity=0;
            elemento.style.marginTop=0;
            elemento.animate([{opacity:'1',marginTop:'8px'}],{duration:1000,fill:"forwards"})
        })
        document.querySelectorAll('.menu .menu1 a').forEach((elemento,index)=>{ 
            elemento.style.width='-200px';
            elemento.animate([{top:'-200px'},{top:0}],{duration:1000+index*500,fill:"forwards"})
        
    }
)}})