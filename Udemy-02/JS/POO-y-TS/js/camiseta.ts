//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampar = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
            
        }
    }
}

//Clase (molde del objeto)

@estampar("Gucci")
class Camiseta implements CamisetaBase{
    //Propiedades (Características del objeto)
    private  color: string;
    private modelo: string;
    private  marca: string;
    private  talla: string;
    private  precio: number;

    //Método (Funciones o acciones del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;

    }
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color
    }
}

//Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha (capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("asdasd", "asdasasd", "asdad", "asdasd", "1");

console.log(camiseta);
camiseta.estampar();

var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "S", 12);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");

console.log(sudadera_nike);

