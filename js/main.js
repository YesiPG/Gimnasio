(function(){
    "use strict"
    const d = document;

    //Barra de navegacion

    const contNavItems = d.querySelector(".nav-cont-items");
    const btnMenu = d.querySelector(".btn-menu");
    const btnClose = d.querySelector(".btn-close");

    d.addEventListener("click",(e)=>{
        if(e.target.matches(".btn-menu")){
            contNavItems.classList.add("nav-cont-items-show");
            btnMenu.classList.add("btn-show");
            btnClose.classList.remove("btn-show");
        }
        if(e.target.matches(".btn-close")){
            contNavItems.classList.remove("nav-cont-items-show");
            btnMenu.classList.remove("btn-show");
            btnClose.classList.add("btn-show");
        }

    })

    
    // Validacion de formulario
    const btnEviar = d.querySelector(".btn-enviar");

    btnEviar.addEventListener("click",(e)=>{
        e.preventDefault();
        
    })
})();