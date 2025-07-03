import { supabase } from './supabaseClient.js'; // Import Supabase client
import { hotel } from './hotel.js'; // Import hotel class

var Hotels=[ ];
var Hotel1= new hotel("sofia",500,12,1400);
Hotels.push(Hotel1);

var Hotel2= new hotel("cleopatra",1000,10,2800);
Hotels.push(Hotel2);


var Hotel3= new hotel("Palais", 200,8,3000);
Hotels.push(Hotel3);

var Hotel4= new hotel("Cosmos", 400,16,6000);
Hotels.push(Hotel4);


// window.Hotels = Hotels; // For debugging or if other non-module scripts need access

async function VeureHotels(){
	try {
		const { data: fetchedHotels, error } = await supabase
			.from('Hotels')
			.select('*');

		if (error) {
			console.error('Error fetching hotels from Supabase:', error);
			document.getElementById("LlistatHotels").innerHTML = "Error al carregar els hotels: " + error.message;
			return;
		}

		if (fetchedHotels) {
			Hotels = fetchedHotels.map(h => {
				// Assuming hotel class constructor expects: nom, nombrehabitacions, nombreplantes, superfícietotal
				// And Supabase columns are: id, name (text[]), numhab, numfloor, surface
				// We take the first name from the array for the hotel object, or an empty string if name is null/empty
				const hotelName = (h.name && h.name.length > 0) ? h.name[0] : "";
				return new hotel(hotelName, h.numhab, h.numfloor, h.surface, h.id); // Pass h.id to constructor
			});
		}

	} catch (err) {
		console.error('Unexpected error fetching hotels:', err);
		document.getElementById("LlistatHotels").innerHTML = "Error inesperat al carregar els hotels.";
		return;
	}

	/*var Hotels=[ ]; // This local array is now populated from Supabase
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
let valor3;*/

    // First, get the target element
    const llistatHotelsElement = document.getElementById("LlistatHotels");

    // Check if the element exists
    if (!llistatHotelsElement) {
        console.error("Error: Element with ID 'LlistatHotels' not found in the DOM.");
        // Optionally, display a message to the user in another way if appropriate
        // For example, alert("Could not find where to display the hotels.");
        return; // Exit the function if the element isn't found
    }

	/*var Hotels=[ ]; // This local array is now populated from Supabase
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
let valor3;*/

    // First, get the target element
    const llistatHotelsElement = document.getElementById("LlistatHotels");

    // Check if the element exists
    if (!llistatHotelsElement) {
        console.error("Error: Element with ID 'LlistatHotels' not found in the DOM.");
        // Optionally, display a message to the user in another way if appropriate
        // For example, alert("Could not find where to display the hotels.");
        return; // Exit the function if the element isn't found
    }

	/*var Hotels=[ ]; // This local array is now populated from Supabase
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
let valor3;*/

// Suposem que 'Hotels' és un array d'objectes hotel
var output = `<ul role="list" class="divide-y divide-gray-100">`; // Start of the Tailwind list

for (var i = 0; i < Hotels.length; i++) {
    if (Hotels[i] && Hotels[i].getnom !== undefined) {
        var nomHotel = Hotels[i].getnom;
        var nombreHabitacions = Hotels[i].getnombrehabitacions;
        var nombrePlantes = Hotels[i].getnombreplantes;
        var superficieTotal = Hotels[i].getsuperfícietotal;

        // Placeholder image - replace with actual hotel image if available
        const placeholderImg = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

        output += `
            <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <img class="size-12 flex-none rounded-full bg-gray-50" src="${placeholderImg}" alt="Hotel Image" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm/6 font-semibold text-gray-900">${nomHotel}</p>
                        <p class="mt-1 truncate text-xs/5 text-gray-500">Habitacions: ${nombreHabitacions}</p>
                    </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p class="text-sm/6 text-gray-900">Plantes: ${nombrePlantes}</p>
                    <p class="mt-1 text-xs/5 text-gray-500">Superfície: ${superficieTotal} m²</p>
                </div>
            </li>`;
    }
}

output += `</ul>`; // End of the Tailwind list

// Actualitzem l'element HTML amb l'ID "LlistatHotels"
    // Now, safely set the innerHTML because we know llistatHotelsElement exists
    llistatHotelsElement.innerHTML = output;




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

async function CreaHotel(){ // Made function async


				let nom=prompt("Nom de l'Hotel?");
				if (!nom || nom.trim() === "") {
					alert("El nom de l'hotel no pot estar buit.");
					return;
				}

				let numHabitacionsStr = prompt("Numero d'Habitacions?");
				let numHabitacions=parseInt(numHabitacionsStr, 10);
				if (isNaN(numHabitacions)) {
					alert("El número d'habitacions ha de ser un número vàlid.");
					return;
				}

				let numPlantesStr = prompt("Quantes plantes té?");
				let numPlantes=parseInt(numPlantesStr, 10);
				if (isNaN(numPlantes)) {
					alert("El número de plantes ha de ser un número vàlid.");
					return;
				}

				let superficieStr = prompt("Superficie Total de l'edifici?");
				let superficie=parseInt(superficieStr, 10);
				if (isNaN(superficie)) {
					alert("La superficie ha de ser un número vàlid.");
					return;
				}

				// Ensure the global Hotels array is used
				let nouHotel= new hotel (nom,numHabitacions,numPlantes,superficie);
				// Hotels.push(nouHotel); // We might fetch from DB instead later

				// Prepare data for Supabase
				const hotelDataToInsert = {
					name: [nom], // Storing name as an array of text as per table schema
					numhab: numHabitacions,
					numfloor: numPlantes,
					surface: superficie
				};

				try {
					const { data, error } = await supabase
						.from('Hotels')
						.insert([hotelDataToInsert])
						.select(); // .select() can be used to get the inserted data back

					if (error) {
						console.error('Error inserting hotel into Supabase:', error);
						alert('Error al guardar l\'hotel a la base de dades: ' + error.message);
						return;
					}

					if (data && data.length > 0) {
						console.log('Hotel inserted successfully:', data);
						// Update the nouHotel instance with the database ID
						nouHotel.setDbId = data[0].id;
						Hotels.push(nouHotel);
					} else {
						// This case should ideally not happen if insert was successful and select() was used
						console.warn('Hotel inserted, but no data returned. Pushing local instance without DB id.');
						Hotels.push(nouHotel);
					}

				} catch (err) {
					console.error('Unexpected error during Supabase insert:', err);
					alert('Error inesperat al guardar l\'hotel.');
					return;
				}


				// Correctly display new hotel's details using getters
				let nomDisplay = nouHotel.getnom;
				let habDisplay = nouHotel.getnombrehabitacions;
				let plantesDisplay = nouHotel.getnombreplantes;
				let supDisplay = nouHotel.getsuperfícietotal;

				document.getElementById("resultat").innerHTML= "Hotel Creat: " + nomDisplay +
															 "<br>Habitacions: " + habDisplay +
															 "<br>Plantes: " + plantesDisplay +
															 "<br>Superficie: " + supDisplay +
															 "<br><em>Guardat a la base de dades!</em>";

				 // VeureHotels(); // This should be updated to fetch from Supabase if called
				}

// Make sure CreaHotel is accessible globally if it's called from HTML onclick
// If apphotel.js is loaded as a module, functions are not global by default.
// We need to attach it to the window object if called directly from HTML.
window.CreaHotel = CreaHotel;
window.VeureHotels = VeureHotels; // Make VeureHotels globally accessible


async function BaixaHotel(){ // Removed Hotels parameter, made async
				let nomPerSuprimir = prompt("Nom de l'hotel que vols suprimir");
				if (!nomPerSuprimir || nomPerSuprimir.trim() === "") {
					alert("El nom de l'hotel no pot estar buit.");
					return;
				}

				// Find the hotel in the local array
				const hotelIndex = Hotels.findIndex(h => h.getnom === nomPerSuprimir);

				if (hotelIndex === -1) {
					document.getElementById("LlistatHotels").innerHTML = `L'hotel "${nomPerSuprimir}" no s'ha trobat.`;
					return;
				}

				const hotelAEliminar = Hotels[hotelIndex];
				const hotelIdAEliminar = hotelAEliminar.getDbId;

				if (!hotelIdAEliminar) {
					alert(`Error: L'hotel "${nomPerSuprimir}" no té un ID de base de dades. Potser no s'ha guardat correctament?`);
					return;
				}

				try {
					const { error } = await supabase
						.from('Hotels')
						.delete()
						.eq('id', hotelIdAEliminar);

					if (error) {
						console.error('Error deleting hotel from Supabase:', error);
						document.getElementById("LlistatHotels").innerHTML = `Error al suprimir l'hotel "${nomPerSuprimir}": ${error.message}`;
						return;
					}

					// Remove from local array
					// Hotels.splice(hotelIndex, 1); // Option 1: remove locally
					document.getElementById("LlistatHotels").innerHTML = `L'hotel "${nomPerSuprimir}" s'ha eliminat correctament.`;

					await VeureHotels(); // Option 2: Refresh the list from DB

				} catch (err) {
					console.error('Unexpected error deleting hotel:', err);
					document.getElementById("LlistatHotels").innerHTML = `Error inesperat al suprimir l'hotel "${nomPerSuprimir}".`;
				}
			}
window.BaixaHotel = BaixaHotel; // Make BaixaHotel globally accessible


async function ModificarHotel() { // Removed Hotels parameter, made async
	let nomPerModificar = prompt("Nom de l'Hotel a modificar:");
	if (!nomPerModificar || nomPerModificar.trim() === "") {
		alert("El nom de l'hotel no pot estar buit.");
		return;
	}

	const hotelIndex = Hotels.findIndex(h => h.getnom === nomPerModificar);

	if (hotelIndex === -1) {
		document.getElementById("LlistatHotels").innerHTML = `L'hotel "${nomPerModificar}" no s'ha trobat.`;
		return;
	}

	const hotelAModificar = Hotels[hotelIndex];
	const hotelIdAModificar = hotelAModificar.getDbId;

	if (!hotelIdAModificar) {
		alert(`Error: L'hotel "${nomPerModificar}" no té un ID de base de dades. No es pot modificar.`);
		return;
	}

	let campAModificar = prompt("Què vols modificar? (nom, numhab, numfloor, surface)");
	if (!campAModificar) return; // User cancelled

	campAModificar = campAModificar.toLowerCase().trim();
	let nouValor;
	let updateData = {};

	switch (campAModificar) {
		case 'nom':
			nouValor = prompt(`Nou nom per a "${hotelAModificar.getnom}":`);
			if (nouValor === null || nouValor.trim() === "") {
				alert("El nom no pot estar buit.");
				return;
			}
			updateData.name = [nouValor]; // Remember name is text[]
			break;
		case 'numhab':
			nouValor = prompt(`Nou número d'habitacions (actual: ${hotelAModificar.getnombrehabitacions}):`);
			let numHab = parseInt(nouValor, 10);
			if (isNaN(numHab)) {
				alert("Ha de ser un número vàlid.");
				return;
			}
			updateData.numhab = numHab;
			break;
		case 'numfloor':
			nouValor = prompt(`Nou número de plantes (actual: ${hotelAModificar.getnombreplantes}):`);
			let numFloor = parseInt(nouValor, 10);
			if (isNaN(numFloor)) {
				alert("Ha de ser un número vàlid.");
				return;
			}
			updateData.numfloor = numFloor;
			break;
		case 'surface':
			nouValor = prompt(`Nova superficie (actual: ${hotelAModificar.getsuperfícietotal}):`);
			let surface = parseFloat(nouValor);
			if (isNaN(surface)) {
				alert("Ha de ser un número vàlid.");
				return;
			}
			updateData.surface = surface;
			break;
		default:
			alert("Camp no reconegut. Intenta amb: nom, numhab, numfloor, surface.");
			return;
	}

	if (Object.keys(updateData).length === 0) {
		alert("No s'ha especificat cap canvi.");
		return;
	}

	try {
		const { data, error } = await supabase
			.from('Hotels')
			.update(updateData)
			.eq('id', hotelIdAModificar)
			.select(); // To get the updated record back

		if (error) {
			console.error('Error updating hotel in Supabase:', error);
			document.getElementById("LlistatHotels").innerHTML = `Error al modificar l'hotel "${nomPerModificar}": ${error.message}`;
			return;
		}

		console.log('Hotel updated successfully in Supabase:', data);
		document.getElementById("LlistatHotels").innerHTML = `L'hotel "${nomPerModificar}" (ara potser amb nou nom) s'ha modificat correctament.`;

		await VeureHotels(); // Refresh the list from DB to show changes

	} catch (err) {
		console.error('Unexpected error updating hotel:', err);
		document.getElementById("LlistatHotels").innerHTML = `Error inesperat al modificar l'hotel "${nomPerModificar}".`;
	}
}
window.ModificarHotel = ModificarHotel; // Make ModificarHotel globally accessible








