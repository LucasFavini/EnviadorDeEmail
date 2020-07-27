const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const botonE = document.getElementById('botonE') ;
const botonB = document.getElementById('botonB');

//Funcion general
Generic();

    function Generic ()
    {
        document.addEventListener('DOMContentLoaded',mostrar)

        email.addEventListener('blur',validar);
        asunto.addEventListener('blur',validar);
        mensaje.addEventListener('blur',validar);

        botonE.addEventListener('click',enviarEmail)
        botonB.addEventListener('click',()=>{
        email.value='';
        asunto.value='';
        mensaje.value='';
        let emoji = document.getElementById('msjEnviado');
        emoji.style.display='none';        
    });
    }

//Funciones
    function mostrar()
    {
        botonE.disabled=true;
    }

    function validar()
    {
       validarLongitud(this)
      
       let errores = document.querySelectorAll('.error');
      

        if(email.value !='' && asunto.value !='' && mensaje.value !='')
        {
            if(errores.length===0)
            {
                botonE.disabled=false;
            }         

        }else{
            botonE.disabled=true;
        }

        if(this.type=='email')
        {
            validarEmail(this);
        }
        
    }

    function validarLongitud(input)
    {
        if(input.value.length>0)
        {
            input.classList.remove('error');
            input.style.borderColor='#5282F1';
        }
        else{            
            input.style.borderColor='red';
            input.classList.add('error');
        }

        
    }

    function validarEmail(email)
    {
        const correo = email.value;
        if(correo.indexOf('@')!=-1)
        {
            email.classList.remove('error');
            email.style.borderColor='#5282F1';
        }
        else
        {
            email.style.borderColor='red';
            email.classList.add('error');
        } 
    }

    //Correo Enviado
    function enviarEmail()
    {
        let loading = document.getElementById('spinner');
        loading.style.display='block'; 

        setTimeout(()=>{
            loading.style.display='none';}, 1000);

        const emoji = document.getElementById('msjEnviado');
        
        setTimeout(()=>{         
            botonE.disabled=true;  
            botonB.disabled=true;    
            emoji.style.marginLeft='30%';             
            emoji.style.display='block';             
            }, 1000);

        setTimeout(()=>{                   
        emoji.style.display='none';   
        alert('Mensaje Enviado');          
        }, 3000); 
        
        setTimeout(()=>{                   
            botonE.disabled=true;  
            botonB.disabled=false;         
            }, 3000);
      
            
    }
   