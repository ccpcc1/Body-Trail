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
	pantallaInicio.className="animated rotateInDownRight";
	splash.className="ocultar";
}

function inicializar()
{
	pantallaInicio=document.getElementById('PantallaInicial');
	splash=document.getElementById('PantallaSplash');
	$('#barraCarga').jQMeter({
    goal:'$1,000',
    raised:'$1,000',
    meterOrientation:'horizontal',
    width:'320px',
    height:'20px'
	});

}

//rotateInDownRight heartBeat