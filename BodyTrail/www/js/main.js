window.onload = inicio;
var pantallaInicio="";
var splash="";

function inicio()
{
	inicializar();
	setTimeout(plash,2000);	
}

function plash()
{
	pantallaInicio.className="pantallas animated rotateInDownRight";
	splash.className="ocultar";
}

function inicializar()
{
	pantallaInicio=document.getElementById('PantallaInicial');
	splash=document.getElementById('PantallaSplash');
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




