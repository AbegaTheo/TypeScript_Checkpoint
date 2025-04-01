// Implémentation de la classe Voiture
var Cars = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés make, model et year
    function Cars(make, model, year) {
        this.make = make; // Initialisation de la marque
        this.model = model; // Initialisation du modèle
        this.year = year; // Initialisation de l'année
    }
    // Implémentation de la méthode start
    Cars.prototype.start = function () {
        // Affiche un message dans la console pour indiquer que le moteur de la voiture a démarré
        console.log("Car engine started");
    };
    return Cars; // Retourne la classe Cars
}());
// Création d'une instance de la classe Car
var myCar1 = new Cars("Toyota", "Corolla", 2020);
// Ici, on crée une voiture avec la marque "Toyota", le modèle "Corolla" et l'année 2020
// Appel de la méthode start
myCar1.start(); // Affiche "Car engine started" dans la console
