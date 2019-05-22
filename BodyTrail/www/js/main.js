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
var PantallaEstadistica="";
var PantallaEventos="";
var PantallaPerfil="";
var PantallaRetos="";
var pantallaEvento1="";
var pantallaEvento2="";
var pantallaEvento3="";
var pantallaEvento4="";
var PantalllaEjercicios="";
var btncomenzar="";
var btnVolver="";
var btnRegistrarse="";
var btnLoguin="";
var btnCreditos="";
var btnEventos="";
var btnPerfil="";
var btnEstadisticas="";
var atras="";
var btnPrincipal="";
var btnEvento1="";
var btnEvento2="";
var btnEvento3="";
var btnEvento4="";
var btnFuerza="";
var btnCardio="";
var btnAbdomen="";
var btnPierna="";
var btnSinImp="";
var btnAtrasEventos="";
var btnAtrasEjercicios="";
var rutina="";
var usu= new Object();
let usuarios;
var index=-1;
var btnAddEjercicio="";
var clickeado=false;




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
	pantallaEvento1=document.getElementById('PantallaEvento1');
	pantallaEvento2=document.getElementById('PantallaEvento2');
	pantallaEvento3=document.getElementById('PantallaEvento3');
	pantallaEvento4=document.getElementById('PantallaEvento4');
	pantallaActividad=document.getElementById('PantallaEstadisticas');
	PantallaPerfil=document.getElementById('PantallaPerfil');
	PantallaFuerza=document.getElementById('PantallaFuerza');
	PantallaAbd=document.getElementById('PantallaAbdomen');
	PantallaCardio=document.getElementById('PantallaCardio');
	PantallaPierna=document.getElementById('PantallaPierna');
	PantallaSinIMp=document.getElementById('PantallaSinImp');	
	PantalllaEjercicios=document.getElementById('PantallaEjercicio');
	PantallaRetos=document.getElementById('');//aqui estaria la pantalla retos
	btncomenzar=document.getElementById('BienvenidoComenzar');	
	btnRegistrarse=document.getElementById('btnRegistrar');
	btnEvento1=document.getElementById('EventosEvento1');
	btnEvento2=document.getElementById('EventosEvento2');
	btnEvento3=document.getElementById('EventosEvento3');
	btnEvento4=document.getElementById('EventosEvento4');
	btnCreditos= document.getElementById('acercaNosotros')
	btnLoguin=document.getElementById('btnIniciar');
	btnVolver=document.getElementById('btnAtras');
	btnAbdomen=document.getElementById('EjerAbdomen');
	btnSinImp=document.getElementById('EjerSinImplementos');
	btnPierna=document.getElementById('EjerPierna');
	btnCardio=document.getElementById('EjerCardio');
	btnFuerza=document.getElementById('EjerFuerza');
	atras=document.getElementsByClassName('atras');
	btnEventos=document.getElementsByClassName('btnEventos');
	btnPrincipal=document.getElementsByClassName('principio');
	btnEstadisticas=document.getElementsByClassName('actividad');
	btnAtrasEjercicios=document.getElementsByClassName('AtrasEjercicios');
	btnAtrasEventos=document.getElementsByClassName('bntAtrasEvento');
	btnPerfil=document.getElementsByClassName('btnPerfil');
	btnAddEjercicio=document.getElementsByClassName('itembtnMas1');
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
   for (var i =0; i < atras.length; i++) 
   {
   		atras[i].addEventListener("click",pantallaPrincipal);    	
   }

   for (var i =0; i < btnEstadisticas.length; i++) 
   {    
     	btnEstadisticas[i].addEventListener("click",PantallaActividad); 
   }

   for (var i =0; i < btnPrincipal.length; i++) 
   {    
     	btnPrincipal[i].addEventListener("click",pantallaPrincipal); 
   }
   for (var i = 0; i < btnAtrasEventos.length; i++) 
   {
   		btnAtrasEventos[i].addEventListener("click",pantallaEvento);
   }

   for (var i = 0; i < btnAtrasEjercicios.length; i++)
   {
   		btnAtrasEjercicios[i].addEventListener("click",pantallaEjercicios);
   }

   for (var i = 0; i < btnPerfil.length; i++)
   {
   		btnPerfil[i].addEventListener("click",pantallaPerfiles);
   }
   for (var i = 0; i < btnEventos.length; i++)
   {
   		btnEventos[i].addEventListener("click",pantallaEvento);
   }

   

   document.getElementById('inicioRapido').addEventListener("click",pantallaPrincipal);  
   btnEvento1.addEventListener("click",PantallaEvento1);
   btnEvento2.addEventListener("click",PantallaEvento2);
   btnEvento3.addEventListener("click",PantallaEvento3);
   btnEvento4.addEventListener("click",PantallaEvento4);
   btnFuerza.addEventListener("click",pantallaFuerza);
   btnAbdomen.addEventListener("click",pantallaAbd);
   btnPierna.addEventListener("click",pantallaPierna);
   btnCardio.addEventListener("click",pantallaCardio);
   btnSinImp.addEventListener("click",pantallaSinImpl);
   ejercicios.addEventListener("click",pantallaEjercicios);






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
			for (i=0; i< usu[0].rutina.length; i++) 
			{
				$("#seccionPrueba").append("<img src='img/Pantallas/ejerciciosdisponibles/"+usu[0].rutina[i]+".png' id='imgprueba'>");
				$("#seccionPrueba").append("<img src='img/Pantallas/ejerciciosdisponibles/"+usu[0].rutina[i]+".gif' class='ocultar' id='imgprueba'>  ");
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

//Seccion de pantallas

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
	PantallaPerfil.className="ocultar";
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
	PantallaPerfil.className="ocultar";


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
	pantallaActividad.className="ocultar"
	PantallaEventos.className="ocultar";
	PantallaPerfil.className="ocultar";
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";		
}

function IrACreditos()
{
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="pantallas";
	pantallaActividad.className="ocultar";
	PantallaPerfil.className="ocultar";
}

function pantallaEvento()
{
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	pantallaActividad.className="ocultar";
	PantallaCreditos.className="ocultar";
	PantallaEventos.className="pantallas";
	PantallaPerfil.className="ocultar";
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	
}

function PantallaActividad()
{
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";
	PantallaEventos.className="ocultar";
	pantallaActividad.className="Pantallas";
	PantallaPerfil.className="ocultar";
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	

}

function pantallaPerfiles()
{
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";
	PantallaEventos.className="ocultar";
	pantallaActividad.className="ocultar";
	PantallaPerfil.className="pantallas";
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	
}

function PantallaEvento1()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='Pantallas';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	//PantallaRetos.className='ocultar';
}

function PantallaEvento2()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='Pantallas';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	//PantallaRetos.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	
}

function PantallaEvento3()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='Pantallas';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	//PantallaRetos.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	
}

function PantallaEvento4()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='Pantallas';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	
	//PantallaRetos.className='ocultar';
}

function pantallaEjercicios()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="Pantallas";	
}
function pantallaFuerza()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="Pantallas";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	

}
function pantallaAbd()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="Pantallas";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaEjercicio.className="ocultar";	
	PantallaSinImp.className="ocultar";

}
function pantallaPierna()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="Pantallas";
	PantallaCardio.className="ocultar";	
	PantallaEjercicio.className="ocultar";	
	PantallaSinImp.className="ocultar";

}
function pantallaSinImpl()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="ocultar";	
	PantallaSinImp.className="Pantallas";
	PantallaEjercicio.className="ocultar";	

}
function pantallaCardio()
{
	pantallaInicio.className='ocultar';
	PantallaAplicacion.className='ocultar';
	PantallaBienvenida.className='ocultar';
	PantallaRegistro.className='ocultar';
	PantallaLoguin.className='ocultar';
	PantallaPrincipal.className='ocultar';
	PantallaCreditos.className='ocultar';
	PantallaEventos.className='ocultar';
	pantallaEvento1.className='ocultar';
	pantallaEvento2.className='ocultar';
	pantallaEvento3.className='ocultar';
	pantallaEvento4.className='ocultar';
	pantallaActividad.className='ocultar';
	PantallaPerfil.className='ocultar';
	PantallaFuerza.className="ocultar";
	PantallaAbd.className="ocultar";
	PantallaPierna.className="ocultar";
	PantallaCardio.className="Pantallas";	
	PantallaSinImp.className="ocultar";
	PantallaEjercicio.className="ocultar";	

}


function ejerciciosfuncion()
{
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








