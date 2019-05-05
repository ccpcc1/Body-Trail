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
var btncomenzar="";
var btnRegistrarse="";
var btnLoguin="";

function inicio()
{
	inicializar();
	asignarEventos();
	//setTimeout(plash,2000);	
}

function plash()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="pantallas animated rotateInDownRight";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
	splash.className="ocultar";
}

function inicializar()
{
	pantallaInicio=document.getElementById('PantallaInicial');
	PantallaAplicacion=document.getElementById('PantallaAplicacion');
	PantallaBienvenida=document.getElementById('PantallaBienvenido');
	PantallaRegistro=document.getElementById('PantallaRegistro');
	PantallaLoguin=document.getElementById('PantallaLoguin');
	btncomenzar=document.getElementById('BienvenidoComenzar');
	btnRegistrarse=document.getElementById('btnRegistrar');
	btnLoguin=document.getElementById('btnIniciar');
	splash=document.getElementById('PantallaSplash');
	Registrar=document.getElementById('Registrar');
	Login=document.getElementById('IniciarSesion');
	ejercicios.className="ocultar";
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
   
    
}


function Registrarse()
{
	var correo=document.getElementById('CorreoRegistro').value;
	var pass=document.getElementById('PassRegistro').value;
	if (correo.length>0 && pass.length>0)
	{						
			var Usuario= new Object();
			Usuario.correo=correo;
			Usuario.pass=pass;
			let usuarios = localStorage.getItem("Usuarios") != null ? JSON.parse(localStorage.getItem("Usuarios")) : [];
			var usu = usuarios.filter(function (usuario) { return usuario.correo == correo; });
			if (usu.length>0)
			{
				console.log("Ya se encuentra registrado este correo,intentelo con otro");

			}
			else
			{
				usuarios.push(Usuario);
				localStorage.setItem("Usuarios", JSON.stringify(usuarios));    
				console.log("se registo");
			}
			
	}
	else
	{
		console.log("rellene los campos");
	}
	
	
}

function Loguin()
{
	var correo=document.getElementById('CorreoLoguin').value;
	var pass=document.getElementById('PassLoguin').value;
	if (correo.length>0 && pass.length>0)
	{
		let usuarios =JSON.parse(localStorage.getItem("Usuarios"));
		var usu = usuarios.filter(function (usuario) { return usuario.correo == correo; });
		if (usu.length>0)
		{
			if (pass==usu[0].pass) 
			{
				console.log("InicioSesion");
			}
			else
			{
				console.log("Contraseña incorrecta");
			}
		}
		else
		{
			console.log("Correo invalido");
		}
		
	}
	else
	{
		console.log("rellene los campos");
	}
}




function PantallaIniciarSesion()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="pantallas";


}
function PantallaInicio()
{
	pantallaInicio.className="pantallas";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="ocultar";
}

function PantallaRegistrarse()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="ocultar";
	PantallaAplicacion.className="ocultar";
	PantallaRegistro.className="pantallas";
	PantallaLoguin.className="ocultar";


}

function pantallaPrincipal()
{

}



function ejerciciosfuncion(){
	ejercicios.className="pantalladeejercicios bounceIn";
	principalpantalla.className="ocultar";
	persona.className="ocultar";
}

function eventosfuncion(){
	ejerciciosfuncion.className="ocultar";
	principalpantalla.className="menuprincipal bounceIn";
	persona.className="ocultar";
}

function perfilfuncion(){
	ejerciciosfuncion.className="ocultar";
	principalpantalla.className="ocultar";
	persona.className="perfil bounceIn";
}






