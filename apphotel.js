var Hotels=[ ];
var Hotel1= new hotel("sofia",500,12,1400);
Hotels.push(Hotel1);

var Hotel2= new hotel("cleopatra",1000,10,2800);
Hotels.push(Hotel2);


var Hotel3= new hotel("Palais", 200,8,3000);
Hotels.push(Hotel3);

var Hotel4= new hotel("Cosmos", 400,16,6000);
Hotels.push(Hotel4);




function VeureHotels(Hotels){
	var Hotels=[ ];
var Hotel1= new hotel("sofia",500,12,1400);
Hotels.push(Hotel1);

var Hotel2= new hotel("cleopatra",1000,10,2800);
Hotels.push(Hotel2);


var Hotel3= new hotel("Palais", 200,8,3000);
Hotels.push(Hotel3);

var Hotel4= new hotel("Cosmos", 400,16,6000);
Hotels.push(Hotel4);
	
let visual;
let valor1;
let valor2;
let valor3;

// Suposem que 'Hotels' és un array d'objectes hotel
var output = ""; // Variable per construir el contingut HTML

for (var i = 0; i < Hotels.length; i++) {
    if (Hotels[i].getnom) {
        var nomHotel = Hotels[i].getnom;
        var nombreHabitacions = Hotels[i].getnombrehabitacions;
        var nombrePlantes = Hotels[i].getnombreplantes;
        var superficieTotal = Hotels[i].getsuperfícietotal;

        // Afegim les dades de l'hotel a la cadena de text
        output += "Nom Hotel: " + nomHotel + "<br><br> Numero habitacions: " + nombreHabitacions +
                  "<br><br> Numero de plantes: " + nombrePlantes +
                  "<br><br> Superficie Total edifici: " + superficieTotal + "<br><br>";
    }
}

// Actualitzem l'element HTML amb l'ID "LlistatHotels"
document.getElementById("LlistatHotels").innerHTML = output;




 /*

//nom=prompt("Nom del Hotel?");
	for(i=0; i<=Hotels.length;i++){
		console.log(Hotels.length);
		

		if( Hotels[i].getnom){
		
	visual=Hotels[i].getnom;
	valor1=Hotels[i].getnombrehabitacions;
	valor2=Hotels[i].getnombreplantes;
	valor3=Hotels[i].getsuperfícietotal;
	//break;
	}
	//Vull veure totes les dades de l'hotel

document.getElementById("LlistatHotels").innerHTML="Nom Hotel"+visual+ "<br><br> Numero habitacions"+valor1+" <br><br>Numero de plantes"+valor2+"<br><br>
Superficie Total edifici"+valor3;
}*/
}

function CreaHotel(Hotels){


				let nom=prompt("Nom de l'Hotel?");
				let numHabitacions=prompt("Numero d'Habitacions?");
				let numPlantes=prompt("Quantes plantes té?");
				let superficie=prompt("Superficie Total de l'edifici?");
				let nouHotel= new hotel (nom,numHabitacions,numPlantes,superficie);
				Hotels.push(nouHotel);
				let valor1=nouHotel.setnombrehabitacionsnombrehabitacions;
				let valor2=nouHotel.setnombreplantesnombreplantes;
				let valor3=nouHotel.setsuperfícietotal;
				let valor4=nouHotel.setnom;


				document.getElementById("resultat").innerHTML= valor1+valor2+valor3+"Nom Hotel"+valor4;
				 

				}


function BaixaHotel(Hotels){
				let baixa=prompt("Nom de l'hotel que vols suprimir");
				let Final="";
				for(i=0; i<Hotels.length; i++){

					if( Hotels[i].getnom==baixa){
						Hotels.splice(i,1);
						
						document.getElementById("LlistatHotels").innerHTML="s'ha eliminat l'hotel"+ baixa;
						break;
					}
					else{
						document.getElementById("LlistatHotels").innerHTML="No s'ha eliminat";

					}
				}
				
			}


function ModificarHotel(Hotels){
				let modificar=prompt("Nom de l'Hotel a modificar");
				let resultat;

				for(i=0; i<Hotels.length; i++){

					if( Hotels[i].getnom==modificar ){

						switch(i){
							case 1:
						let canvihab=prompt("vols canviar el nombre habitacions ?");
						Hotels.setnombrehabitacions(canvihab);
						document.getElementById("LlistatHotels").innerHTML="Hotel"+Hotels.getnom(modificar)+ "ara té"+Hotels.getnombrehabitacions(modificar);
						break;
						case 2:
						let canviplant=prompt("vols canviar el nombre de plantes ?");
						Hotels.setnombreplantes(canviplant);
						document.getElementById("LlistatHotels").innerHTML="No s'ha eliminat"
						break;
						case 3:
						let canvisup=prompt("vols canviar la superficie ?");
						Hotels.setsuperfícietotal(canvisup);
						document.getElementById("LlistatHotels").innerHTML="No s'ha eliminat"
						break;

						
					}
					document.getElementById("LlistatHotels").innerHTML="No s'ha eliminat"
			}
		}
	}








