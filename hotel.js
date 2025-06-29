

		class hotel{
			constructor(nom,nombrehabitacions,nombreplantes,superfícietotal){
				
				this._nom=nom;
				this._nombrehabitacions=nombrehabitacions;
				this._nombreplantes=nombreplantes;
				this._superfícietotal=superfícietotal;

			}

			//geters i seters
			get getnom() {
    		return this._nom;
 		    }
 			set setnom(nom) {
    	    this._nom = nom;
 			}
 			get getnombrehabitacions() {
    		return this._nombrehabitacions;
 		    }
 			set setnombrehabitacions(nombrehabitacions) {
    	    this._nombrehabitacions = nombrehabitacions;
 			}
 			get getnombreplantes() {
    		return this._nombreplantes;
 		    }
 			set setnombreplantes(nombreplantes) {
    	    this._nombreplantes = nombreplantes;
 			}
 			get getsuperfícietotal() {
    		return this._superfícietotal;
 		    }
 			set setsuperfícietotal(x) {
    	    this._superfícietotal = x;
 			}


			//mètodes 

			// calculmanteniment(){

				//let souMensual= 1500;
				//let tasca_mant= 20;
				//let totalPersonal=1 ;
				//let costPersonal=(totalPersonal)/(tasca_mant);
				//let costTotal= (costPersonal)/(souMensual);
				//if(this._nombrehabitacions/tasca_mant <){
					//totalPersonal++;

				//}

				//return costTotal;
			//}
		}