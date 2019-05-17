//funciones con inicial btn son para la navegacion de una ventana a otra;
window.onload = inicio;
var pantallaInicio="";
var splash="";
var Registrar="";
var Login="";
var PantallaAplicacion="";
var PantallaBienvenida="";
var PantallaRegistro="";
var PantallaLoguin="";
var PantallaPrincipal="";
var PantallaCreditos="";
var btncomenzar="";
var btnVolver="";
var btnRegistrarse="";
var PantallaEventos="";
var btnLoguin="";
var btnCreditos="";
var btnEventos="";
var btnPerfil="";
var ejercicios="";
var rutina="";
var usu= new Object();
let usuarios;
var index=-1;
var atras="";


function inicio()
{
	inicializar();
	asignarEventos();
	setTimeout(plash,2000);	
}

function plash()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="pantallas animated rotateInDownRight";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	pantallaInicio.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";
	
	splash.className="ocultar";
}

function inicializar()
{
	pantallaInicio=document.getElementById('PantallaInicial');
	PantallaAplicacion=document.getElementById('PantallaAplicacion');
	PantallaBienvenida=document.getElementById('PantallaBienvenido');
	PantallaRegistro=document.getElementById('PantallaRegistro');
	PantallaLoguin=document.getElementById('PantallaLoguin');
	PantallaPrincipal=document.getElementById('PantallaPrincipal');
	PantallaCreditos=document.getElementById('Pantallacreditos');
	PantallaEventos=document.getElementById('PantallaEventos');
	btncomenzar=document.getElementById('BienvenidoComenzar');

	btnRegistrarse=document.getElementById('btnRegistrar');
	btnCreditos= document.getElementById('acercaNosotros')
	btnLoguin=document.getElementById('btnIniciar');
	btnVolver=document.getElementById('btnAtras');
	btnEventos=document.getElementById('btnEvento');
	btnPerfil=document.getElementById('btnPerfil')
	atras=document.getElementsByClassName('atras');
	splash=document.getElementById('PantallaSplash');
	Registrar=document.getElementById('Registrar');
	Login=document.getElementById('IniciarSesion');
	ejercicios=document.getElementById('textoEjercicio');
	rutina=document.getElementById('TextoRutina');

	principalpantalla.className="ocultar";
	persona.className="ocultar";
	$('#barraCarga').jQMeter({
    goal:'$1,000',
    raised:'$1,000',
    meterOrientation:'horizontal',
    width:'320px',
    height:'20px'
	});

}
function asignarEventos()
{
    
   Registrar.addEventListener("click",Registrarse);
   Login.addEventListener("click",Loguin);
   btncomenzar.addEventListener("click",PantallaInicio);
   btnLoguin.addEventListener("click",PantallaIniciarSesion);
   btnRegistrarse.addEventListener("click",PantallaRegistrarse);
   ejercicios.addEventListener("click",ejerciciosPrincipal);
   rutina.addEventListener("click",rutinaPrincipal);
   btnCreditos.addEventListener("click",IrACreditos);
   btnVolver.addEventListener("click",plash);
   btnEventos.addEventListener("click",pantallaEvento);
   for (var i =0; i < atras.length; i++) 
   {
   	atras[i].addEventListener("click",pantallaPrincipal);
    
   document.getElementById('inicioRapido').addEventListener("click",pantallaPrincipal);  
   }
    
}


function Registrarse()
{
	var correo=document.getElementById('CorreoRegistro').value;
	var pass=document.getElementById('PassRegistro').value;
	if (correo.length>0 && pass.length>0)
	{						
			var Usuario= new Object();
			var retos= new Object();
			retos.numRetos=0;
			retos.RetoMesdiasCompletados=0;
			retos.RetoMesFechaFin="";
			retos.RetoMesUltimoDia= new Date(2019,4,15)// se guarda el ultimo dia que se completo el reto
			Usuario.correo=correo;
			Usuario.pass=pass;
			Usuario.retos= retos;
			let usuarios = localStorage.getItem("Usuarios") != null ? JSON.parse(localStorage.getItem("Usuarios")) : [];
			usu = usuarios.filter(function (usuario) { return usuario.correo == correo; });
			if (usu.length>0)
			{
				alert("Ya se encuentra registrado este correo,intentelo con otro");

			}
			else
			{
				//toda cambiarlo para que vaya a otra pantalla
				usuarios.push(Usuario);
				localStorage.setItem("Usuarios", JSON.stringify(usuarios));
				//alert("Usuario Registrado");
				PantallaIniciarSesion();    
				
			}
			
	}
	else
	{
		alert("rellene los campos");
	}
	
	
}

function Loguin()
{
	var correo=document.getElementById('CorreoLoguin').value;
	var pass=document.getElementById('PassLoguin').value;
	if (correo.length>0 && pass.length>0)
	{
		usuarios =JSON.parse(localStorage.getItem("Usuarios"));
		usu = usuarios.filter(function (usuario) { return usuario.correo == correo; });

		if (usu.length>0)
		{
			if (pass==usu[0].pass) 
			{
				//para obtener la posicion del arreglo de usuarios en local store una vez
				for(var i = 0; i < usuarios.length; i++) 
				{
    					if (usuarios[i].correo === correo)
    					{
        					index = i;
        					break;
    					}
				}
				pantallaPrincipal();
			}
			else
			{
				alert("Contraseña incorrecta");
			}
		}
		else
		{
			alert("Correo invalido");
		}
		
	}
	else
	{
		alert("rellene los campos");
	}
}

function agregarARutina(rutina)
{
	//mejorar el for se puede hacer en el loguin para solo hacerlo una vez.
	var correo = usu[0].correo;
	var usuario= new Object();
	
		if (usu[0].hasOwnProperty('rutina'))
		{
			usu[0].rutina.push(rutina);
			
		}
		else
		{		
			usuario.correo= usu[0].correo;
			usuario.pass=usu[0].pass;
			usuario.rutina=[];
			usuario.rutina.push(rutina);
			usu[0]=usuario;	
		}
	
		usuarios[index]=usu[0];
		localStorage.setItem("Usuarios", JSON.stringify(usuarios));
	
}

function ValidarRetoMes()
{
	var diaActual= new Date();
	var ultimoDiaCheck=new Date(usu[0].retos.RetoMesUltimoDia);
	if(ultimoDiaCheck<diaActual)
	{
		console.log("se sube la var de diascompletadosMes");
	}
	else
	{
		console.log("no se muestra reto del mes");
	}
}

function PintarRutina()
{
	var i = 0
	if (usu[0].hasOwnProperty('rutina'))
		{
			//se recorre el arreglo de rutinas	
			for (i=0; i< usu[0].rutina.length; i++) {
				$("#seccionPrueba").append("<img src='img/Pantallas/ejerciciosdisponibles/"+usu[0].rutina[i]+".png' id='imgprueba'>");
			}
			
			
			
		}
		else
		{		
			//significa que no tiene ningun ejercicio en su rutina
		}
}



function ejerciciosPrincipal()
{
	document.getElementById('barraSeleccion').className="";
	document.getElementById('barraSeleccion2').className="ocultar";

	
}

function rutinaPrincipal()
{
	document.getElementById('barraSeleccion').className="ocultar";
	document.getElementById('barraSeleccion2').className="";

}



function PantallaIniciarSesion()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="pantallas";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";
	


}
function PantallaInicio()
{
	pantallaInicio.className="pantallas";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";

}

function PantallaRegistrarse()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="pantallas";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";


}

function pantallaPrincipal()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaCreditos.className="ocultar";
	PantallaPrincipal.className="pantallas";
	PantallaCreditos.className="ocultar";



}

function IrACreditos()
{
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="pantallas";
	
}

function pantallaEvento()
{
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";
	PantallaEventos.className="pantallas";
}


function ejerciciosfuncion(){
	ejercicios.className="pantalladeejercicios bounceIn";
	principalpantalla.className="ocultar";
	persona.className="ocultar";
	PantallaPrincipal.className="ocultar";
}

function eventosfuncion(){
	ejerciciosfuncion.className="ocultar";
	principalpantalla.className="menuprincipal bounceIn";
	persona.className="ocultar";
	PantallaPrincipal.className="ocultar";
}

function perfilfuncion(){
	ejerciciosfuncion.className="ocultar";
	principalpantalla.className="ocultar";
	persona.className="perfil bounceIn";
	PantallaPrincipal.className="ocultar";
}








