$(document).ready(function(){

    $('#btnSend').click(function(){

        let errores = '';

        // Validando Nombre ===========================================
        if($('#names').val() == ''){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        }else{
            $('#names').css("border-bottom-color", "#D1D1D1")
        }
        // Validando Correo ===========================================
        if($('#email').val() == ''){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        }else{
            $('#email').css("border-bottom-color", "#D1D1D1")
        }
        // Validando Mensaje ===========================================
        if($('#mensaje').val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        }else{
            $('#mensaje').css("border-bottom-color", "#D1D1D1")
        }

         // Enviando Mensaje ===========================================
         if(errores == '' == false){
             let mensajeModal = '<div class="modal_wrap">' +
                                     '<div class="mensaje_modal">' + 
                                        '<h3>Campos Incorrectos / Vacios</h3>' +
                                        errores +
                                        '<span id="btnClose">Cerrar</span>' +
                                     '</div>' + 
                                '</div>'

            $('body').append(mensajeModal)
         }

         // CERRANDO MODAL ===========================================
         $('#btnClose').click(function(){
             $('.modal_wrap').remove();
         });


    });

    // MENU FIXED
    let menu = document.getElementById("Menu-fij");

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        
        if(scroll >= 105){
            menu.classList.add("fijado")
        }
    })


});