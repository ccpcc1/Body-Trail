//funciones con inicial btn son para la navegacion de una ventana a otra;
window.onload = inicio;
var volverinicio="";
var lightbox;
var cronoFuerza="";
var cronoAbd="";
var cronoSinimp="";
var cronoCardio="";
var cronoPierna="";
var cronometrando=[];
var contador=0;
var tiempo=39;
var isrutina=true;
var pantallaInicio="";
var splash="";
var Registrar="";
var Login="";
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
var PantallaMirutina="";
var btncomenzar="";
var btnVolver="";
var btnRegistrarse="";
var btnLoguin="";
var btnCreditos="";
var btnEventos="";
var btnPerfil="";
var btnRutina="";
var btnRetos="";
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
var usu= new Object();
let usuarios;
var index=-1;
var ejercioEnEspera="";
var cronometrosRutina;
var btnAddEjercicio="";
var checkejercicio="";
var cronometrosEjercicios=[];//1 abdomen,0 Fuerza,3 cardio, 4 pierna, 2 sinImpl 

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
	PantallaMirutina=document.getElementById('PantallaRutina');
	PantallaRetos=document.getElementById('PantallaReto');//aqui estaria la pantalla retos
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
	lightbox=document.getElementById("lightbox");
	atras=document.getElementsByClassName('atras');
	btnEventos=document.getElementsByClassName('btnEventos');
	btnPrincipal=document.getElementsByClassName('principio');
	btnEstadisticas=document.getElementsByClassName('actividad');
	btnAtrasEjercicios=document.getElementsByClassName('AtrasEjercicios');
	btnAtrasEventos=document.getElementsByClassName('bntAtrasEvento');
	btnRetos=document.getElementsByClassName('irRetos');
	ejercioEnEspera=document.getElementsByClassName('ejercioEnEspera');
	cronometrosRutina=document.getElementsByClassName('lblTiempoRutina');
	btnPerfil=document.getElementsByClassName('btnPerfil');
	btnRutina=document.getElementsByClassName('IrRutina');
	btnAddEjercicio=document.getElementsByClassName('itembtnMas1');
	checkejercicio=document.getElementsByClassName('itemCheck1');
	splash=document.getElementById('PantallaSplash');
	Registrar=document.getElementById('Registrar');
	Login=document.getElementById('IniciarSesion');
	ejercicios=document.getElementsByClassName('IrEjercicio');
	cronoFuerza=document.getElementsByClassName('lblFuerza');
	cronoAbd=document.getElementsByClassName('lblAbd');
	cronoSinimp=document.getElementsByClassName('lblSinimp');
	cronoCardio=document.getElementsByClassName('lblCardio');
	cronoPierna=document.getElementsByClassName('lblPierna');
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
   btnCreditos.addEventListener("click",IrACreditos);
   btnVolver.addEventListener("click",plash);
   document.getElementById('btnComenzarRutina').addEventListener("click",EjecutarEjercicio);
   volverinicio=document.getElementsByClassName('pantPrincipal');


  
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
    for (var i = 0; i < btnRutina.length; i++)
   {
   		btnRutina[i].addEventListener("click",Pantallarutina);
   }
    for (var i = 0; i < ejercicios.length; i++)
   {
   		ejercicios[i].addEventListener("click",pantallaEjercicios);
   }
   for (var i = 0; i < ejercicios.length; i++)
   {
   		ejercicios[i].addEventListener("click",pantallaEjercicios);
   }
   for (var i = 0; i < checkejercicio.length; i++)
   {
   		checkejercicio[i].addEventListener("click",guardarProgreso);
   }
    for (var i = 0; i < volverinicio.length; i++)
   {
   		volverinicio[i].addEventListener("click",PantallaInicio);
   }
   for (var i = 0; i < btnRetos.length; i++)
   {
   		btnRetos[i].addEventListener("click",pantallaRetos);
   }
   

   document.getElementById('btnComenzarAbdomen').addEventListener("click",cronometroAbdomen);
   document.getElementById('btnComenzarFuerza').addEventListener("click",cronometroFuerza);
   document.getElementById('btnComenzarSinImp').addEventListener("click",cronometroSinImp);
   document.getElementById('btnComenzarCardio').addEventListener("click",cronometroCardio);   
   document.getElementById('btnComenzarPierna').addEventListener("click",cronometroPierna);
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







}

function guardarProgreso()
{
	usu[0].retos.numRetos++;
	usuarios[index]=usu[0];
	localStorage.setItem("Usuarios", JSON.stringify(usuarios));
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
				usuarios.push(Usuario);
				localStorage.setItem("Usuarios", JSON.stringify(usuarios));
				alert("Usuario registrado con exito");
				PantallaIniciarSesion();
				//PantallaInicio();    
				
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
			usuario.retos=usu[0].retos;
			usu[0]=usuario;	
		}
	
		usuarios[index]=usu[0];
		localStorage.setItem("Usuarios", JSON.stringify(usuarios));
		$("#RutinaDivEjer").empty();
		isrutina=true;
		lightbox.className="";
		setTimeout(()=>{lightbox.className="ocultar"},3000);
		

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
	if (isrutina==true) 
	{
		var i = 0
		if (usu[0].hasOwnProperty('rutina'))
			{
				//se recorre el arreglo de rutinas	
				for (i=0; i< usu[0].rutina.length; i++) 
				{
					$("#RutinaDivEjer").append("<div class='contenedorEjericicio'><img src='img/Pantallas/ejerciciosdisponibles/"+usu[0].rutina[i]+".png' id='imgejPng'> <img src='img/Pantallas/ejerciciosdisponibles/"+usu[0].rutina[i]+".gif' class='ocultar ejercioEnEspera' id='imgGif'> <strong  class='lblTiempoRutina'>40</strong></div>");
				}												
			}
			else
			{		
				//significa que no tiene ningun ejercicio en su rutina
			}
		isrutina=false;
	}

}

function resetRutina()
{
	if (ejercioEnEspera.length>0 && contador==ejercioEnEspera.length)
	{
			for (var i = 0; i <ejercioEnEspera.length;i++)
			{
				ejercioEnEspera[i].parentNode.className="contenedorEjericicio";
				ejercioEnEspera[i].className="ocultar ejercioEnEspera";
			}
			contador=0;
	}

}

function EjecutarEjercicio()
{
	if (contador<ejercioEnEspera.length) 
	{
		setTimeout(function()
			{

				ejercioEnEspera[contador].className="mostrargif ejercioEnEspera";
				contador++;
				tiempo=39;
				CronometroRutina();
			},5000);
		
		setTimeout(function()
		{
			EjecutarEjercicio();
			
			if(contador>0)
			{
				ejercioEnEspera[contador-1].parentNode.className="ocultar contenedorEjericicio";
				ejercioEnEspera[contador-1].className="ocultar ejercioEnEspera";
			}
		}

			,45000)
		
	}
	
}

function CronometroRutina()
{
	if (contador<ejercioEnEspera.length+1) 
	{
		cronometrando[contador-1]=setTimeout(function()
			{
				if(tiempo>=0)
				{
					clearTimeout(cronometrando[contador-1]);
					cronometrosRutina[contador-1].innerText="00";	
				}
				if (tiempo<10)
				{
					
					cronometrosRutina[contador-1].innerText="0"+tiempo;					 
					tiempo--;
					CronometroRutina();
				}
				else
				{
					cronometrosRutina[contador-1].className="lblTiempoRutina arreglarlbl";
					cronometrosRutina[contador-1].innerText=tiempo;
					tiempo--;
					CronometroRutina();
				}

			},1000);
	}	
}



function cronometroFuerza()
{
	
	var contFuerza=1;
	var contFuerzaMin=0;
	cronoFuerza[0].innerText=0;
	var ejersFuerza=document.getElementsByClassName('FuerzaGif');
	for (var i = 0; i <ejersFuerza.length;i++)
	{
				ejersFuerza[i].className="ocultarGif FuerzaGif mostrarGifEjer";
	}
	cronometrosEjercicios.push(setInterval(function(){

		if (contFuerza<=59)
		{		
			if (contFuerza<10)
			{
				cronoFuerza[1].innerText=": 0"+contFuerza;			
			}
			else
			{
				cronoFuerza[1].innerText=": "+contFuerza;
			}
			contFuerza++;			
		}
		else
		{
			contFuerzaMin++;
			cronoFuerza[0].innerText=contFuerzaMin;
			contFuerza=0;
		}
	}, 1000));
}

function cronometroAbdomen()
{
	
	var contAbd=1;
	var contAbdMin=0;
	var ejersAbd=document.getElementsByClassName('abdomenGif');
	for (var i = 0; i <ejersAbd.length;i++)
	{
				ejersAbd[i].className="ocultarGif abdomenGif mostrarGifEjer";
	}
	cronoAbd[0].innerText=0;
	cronometrosEjercicios.push(setInterval(function(){

		if (contAbd<=59)
		{		
			if (contAbd<10)
			{
				cronoAbd[1].innerText=": 0"+contAbd;			
			}
			else
			{
				cronoAbd[1].innerText=": "+contAbd;
			}
			contAbd++;			
		}
		else
		{
			contAbdMin++;
			cronoAbd[0].innerText=contAbdMin;
			contAbd=0;
		}
	}, 1000));
}
function cronometroSinImp()
{
	
	var contSinimp=1;
	var contSinimpMin=0;
	var ejersSinImp=document.getElementsByClassName('SinImpGif');
	for (var i = 0; i <ejersSinImp.length;i++)
	{
				ejersSinImp[i].className="ocultarGif SinImpGif mostrarGifEjer";
	}
	cronoSinimp[0].innerText=0;
	cronometrosEjercicios.push(setInterval(function(){

		if (contSinimp<=59)
		{		
			if (contSinimp<10)
			{
				cronoSinimp[1].innerText=": 0"+contSinimp;			
			}
			else
			{
				cronoSinimp[1].innerText=": "+contSinimp;
			}
			contSinimp++;			
		}
		else
		{
			contSinimpMin++;
			cronoSinimp[0].innerText=contSinimpMin;
			contSinimp=0;
		}
	}, 1000));
}


function cronometroCardio()
{
	
	var contCardio=1;
	var contCardioMin=0;
	var ejerscardio=document.getElementsByClassName('cardioGif');
	for (var i = 0; i <ejerscardio.length;i++)
	{
				ejerscardio[i].className="ocultarGif cardioGif mostrarGifEjer";
	}
	cronoCardio[0].innerText=0;
	cronometrosEjercicios.push(setInterval(function(){

		if (contCardio<=59)
		{		
			if (contCardio<10)
			{
				cronoCardio[1].innerText=": 0"+contCardio;			
			}
			else
			{
				cronoCardio[1].innerText=": "+contCardio;
			}
			contCardio++;			
		}
		else
		{
			contCardioMin++;
			cronoCardio[0].innerText=contCardioMin;
			contCardio=0;
		}
	}, 1000));
}


function cronometroPierna()
{
	
	var contPierna=1;
	var contPiernaMin=0;
	var ejerspierna=document.getElementsByClassName('piernaGif');
	for (var i = 0; i <ejerspierna.length;i++)
	{
				ejerspierna[i].className="ocultarGif piernaGif mostrarGifEjer";
	}
	cronoPierna[0].innerText=0;
	cronometrosEjercicios.push(setInterval(function(){

		if (contPierna<=59)
		{		
			if (contPierna<10)
			{
				cronoPierna[1].innerText=": 0"+contPierna;			
			}
			else
			{
				cronoPierna[1].innerText=": "+contPierna;
			}
			contPierna++;			
		}
		else
		{
			contPiernaMin++;
			cronoPierna[0].innerText=contPiernaMin;
			contPierna=0;
		}
	}, 1000));
}

function ResetEjericicios()
{
	resetGifs();
	for (var i = 0; i<cronometrosEjercicios.length;i++)
	{
		clearTimeout(cronometrosEjercicios[i]);
	}

		 cronoFuerza[0].innerText='0';
 		 cronoAbd[0].innerText='0';
		 cronoSinimp[0].innerText='0';
		 cronoCardio[0].innerText='0';
		 cronoPierna[0].innerText='0';
		 cronoFuerza[1].innerText=': 00';
 		 cronoAbd[1].innerText=': 00';
		 cronoSinimp[1].innerText=': 00';
		 cronoCardio[1].innerText=': 00';
		 cronoPierna[1].innerText=': 00';	
}

function resetGifs()
{
	var ejercicios=document.getElementsByClassName('ocultarGif');
	for (var i = 0; i<ejercicios.length;i++)
	{
		if (i<6)
		{
			ejercicios[i].className="ocultarGif FuerzaGif";
		}
		if (i<12 && i>=6){
			ejercicios[i].className="ocultarGif abdomenGif";			
		}
		if (i<18 && i>=12){
			ejercicios[i].className="ocultarGif SinImpGif";

		}
		if (i<24 && i>=18){
			ejercicios[i].className="ocultarGif cardioGif";
			
		}
		if (i<30 && i>=24){
			ejercicios[i].className="ocultarGif piernaGif";			
			
		}	
	}
}

function CargarProgreso()
{
	var tiempo_Entrenamiento= Number(usu[0].retos.numRetos)*40; //cada reto ó ejercicio tiene 40 seg
	var horas = Math.floor(tiempo_Entrenamiento/3600); 
    var minutos = Math.floor(tiempo_Entrenamiento % 3600/60); 
    var segundos = Math.floor(tiempo_Entrenamiento % 3600 % 60);
    horas = horas<10? "0"+horas : horas;
    minutos = minutos<10? "0"+minutos : minutos;
    segundos = segundos<10? "0"+segundos : segundos;


    document.getElementById('perfilTEntrenamiento').innerText=horas+" : "+minutos+" : "+segundos+" horas";
    document.getElementById('estadisticaTiempo').innerText=horas+":"+minutos+":"+segundos+" horas";  


}

function CalcularLogros()
{
	var txtPerfLogros=document.getElementById('PerfilNumlogros');
	var txtEstLogros=document.getElementById('estadisticaRetos');
	var num_retos= Number(usu[0].retos.numRetos);
	var logros;
	if (num_retos==0)
	{
		txtPerfLogros.innerText=0;
		txtEstLogros.innerText=0;

	}
	if(num_retos>10)
	{
		txtPerfLogros.innerText=1;
		txtEstLogros.innerText=1;
		document.getElementById('EstadisticaSinPintar1').className="ocultar";
	}
	if(num_retos>15)
	{
		txtPerfLogros.innerText=2;
		txtEstLogros.innerText=2;
		document.getElementById('EstadisticaSinPintar2').className="ocultar";

	}
	if(num_retos>25)
	{
		txtPerfLogros.innerText=3;
		txtEstLogros.innerText=3;
		document.getElementById('EstadisticaSinPintar3').className="ocultar";

	}
	if(num_retos>35)
	{
		txtPerfLogros.innerText=4;
		txtEstLogros.innerText=4;
		document.getElementById('EstadisticaSinPintar4').className="ocultar";

	}
	if(num_retos>50)
	{
		txtPerfLogros.innerText=5;
		txtEstLogros.innerText=5;
		document.getElementById('EstadisticaSinPintar5').className="ocultar";

	}
	if(num_retos>60)
	{
		txtPerfLogros.innerText=6;
		txtEstLogros.innerText=6;
		document.getElementById('EstadisticaSinPintar6').className="ocultar";

	}
	if(num_retos>70)
	{
		txtPerfLogros.innerText=7;
		txtEstLogros.innerText=7;
		document.getElementById('EstadisticaSinPintar7').className="ocultar";

	}
	if(num_retos>75)
	{
		txtPerfLogros.innerText=8;
		txtEstLogros.innerText=8;
		document.getElementById('EstadisticaSinPintar8').className="ocultar";

	}
	if(num_retos>80)
	{
		txtPerfLogros.innerText=9;
		txtEstLogros.innerText=9;
		document.getElementById('EstadisticaSinPintar9').className="ocultar";

	}
	if(num_retos>85)
	{
		txtPerfLogros.innerText=10;
		txtEstLogros.innerText=10;
		document.getElementById('EstadisticaSinPintar10').className="ocultar";

	}
	if(num_retos>90)
	{
		txtPerfLogros.innerText=11;
		txtEstLogros.innerText=11;
		document.getElementById('EstadisticaSinPintar11').className="ocultar";

	}
	if(num_retos>100)
	{
		txtPerfLogros.innerText=12;
		txtEstLogros.innerText=12;
		document.getElementById('EstadisticaSinPintar12').className="ocultar";

	}
	
}

//Seccion de pantallas

function PantallaIniciarSesion()
{
	pantallaInicio.className="ocultar";
	PantallaBienvenida.className="ocultar";
	PantallaRegistro.className="ocultar";
	PantallaLoguin.className="pantallas";
	PantallaPrincipal.className="ocultar";
	PantallaCreditos.className="ocultar";
	


}
function PantallaInicio()
{
	pantallaInicio.className="pantallas";
	PantallaBienvenida.className="ocultar";
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
	PantallaMirutina.className="ocultar";
	PantallaRetos.className='ocultar';
	ResetEjericicios();			
}

function IrACreditos()
{
	PantallaBienvenida.className="ocultar";
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
	PantallaMirutina.className="ocultar";
	PantallaRetos.className='ocultar';		
}

function PantallaActividad()
{
	CargarProgreso();
	CalcularLogros();
	PantallaBienvenida.className="ocultar";
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
	PantallaMirutina.className="ocultar";
	PantallaRetos.className='ocultar';
	ResetEjericicios();		

}

function pantallaPerfiles()
{
	CargarProgreso();
	CalcularLogros();
	PantallaBienvenida.className="ocultar";
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
	PantallaMirutina.className="ocultar";		
}

function PantallaEvento1()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';
}


function PantallaEvento2()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';
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
    PantallaRetos.className='ocultar';
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
	PantallaRetos.className='ocultar';
}

function pantallaEjercicios()
{
	pantallaInicio.className='ocultar';
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
	PantallaMirutina.className="ocultar";
	PantallaRetos.className='ocultar';
	ResetEjericicios();		
}
function pantallaFuerza()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';	

}
function pantallaAbd()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';

}
function pantallaPierna()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';

}
function pantallaSinImpl()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';	

}
function pantallaCardio()
{
	pantallaInicio.className='ocultar';
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
	PantallaRetos.className='ocultar';

}


function Pantallarutina()
{
	PantallaPrincipal.className='ocultar';
	PantallaEjercicio.className="ocultar";
	PantallaMirutina.className="Pantallas";
	PintarRutina();
	resetRutina();

}

function pantallaRetos()
{
	pantallaInicio.className='ocultar';
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
	PantallaEjercicio.className="ocultar";
	PantallaMirutina.className="ocultar";
	PantallaRetos.className='Pantallas';
	ResetEjericicios();	
}








