(function(){
    "use strict"
    const d = document;
    const w = window;

    // Desplazando la pagina hacia arriba

    const btnDesplazar = d.querySelector(".btn-desplazar");

    w.addEventListener("scroll",(e)=>{
    
        if(scrollY > 500){
            btnDesplazar.classList.add("btn-desplazar-show");
        }
        else{
            btnDesplazar.classList.remove("btn-desplazar-show");
        }
    })

})();
