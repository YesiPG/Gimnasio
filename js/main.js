(function(){
    "use strict"
    const d = document;
    const w = window;

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
    const btnReset = d.querySelector(".btn-reset");
    
    const pNombre = d.querySelector(".p-nombre");
    const pCorreo = d.querySelector(".p-correo");

    

    btnEviar.addEventListener("click",(e)=>{
        const nombreForm = d.getElementById("nombreForm").value;
        const correoForm = d.getElementById("correoForm").value;


        let regexNombre = /^[a-zA-ZÀ-ÿ\s]+$/;
        let regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/;
        
        if(regexNombre.test(nombreForm)){
            pNombre.innerHTML = "El nombre ingresado es correcto";
        }
        else{
            e.preventDefault();
            pNombre.innerHTML = "El nombre ingresado es incorrecto";
        }

        if(regexCorreo.test(correoForm)){
            pCorreo.innerHTML ="El correo ingresado es correcto";
        }
        else{
            e.preventDefault();
            pCorreo.innerHTML ="El correo ingresado es incorrecto";
        }

    });

    btnReset.addEventListener("click",(e)=>{
        pNombre.innerHTML = "";
        pCorreo.innerHTML = "";   
    })

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
