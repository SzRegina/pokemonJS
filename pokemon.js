//tervrajz az objektumnak

class pokemon{
    //inicializálja és beállítsa az adattagokat
    constructor(name, img){
        //adattagok...
        this._name = name;
        this._img = img;


    }
    set name(name){
        this._name = name;



    }
    get name(){
        return this._name;

    }
    set img(img){
        this._img = img;

    }
    get img(){
        return this._img;

    }

    introduce(){
        console.log(`Szia, a nevem ${this.name}\nA képem: ${this.img}`)


    }
    fetchPokemon(){



    }

    






}

pokemon = new pokemon('Pikachu');
console.log(pokemon.name);
pokemon.name = "Ditto";
console.log(pokemon.name);

console.log("Hali");




    // hozz létre egy Search input osztályt
    // a search input osztály példánya várjon egy tényleges imput html elemet
    // hozz létre az inputhoz gettert és settert



