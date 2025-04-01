// Définition de l'interface Vehicule
interface Vehicule {
    make: string; // Marque du véhicule (ex. Toyota, Ford)
    model: string; // Modèle du véhicule (ex. Corolla, Mustang)
    year: number; // Année de fabrication du véhicule
    start(): void; // Méthode pour démarrer le véhicule, ne retourne rien (void)
}

// Implémentation de la classe Voiture
class Car implements Vehicule {
    make: string; // Propriété pour la marque du véhicule
    model: string; // Propriété pour le modèle du véhicule
    year: number; // Propriété pour l'année de fabrication

    // Constructeur pour initialiser les propriétés make, model et year
    constructor(make: string, model: string, year: number) {
        this.make = make; // Initialisation de la marque
        this.model = model; // Initialisation du modèle
        this.year = year; // Initialisation de l'année
    }

    // Implémentation de la méthode start
    start(): void {
        // Affiche un message dans la console pour indiquer que le moteur de la voiture a démarré
        console.log("Car engine started");
    }
}

// Création d'une instance de la classe Car
const myCar = new Car("Toyota", "Corolla", 2020); 
// Ici, on crée une voiture avec la marque "Toyota", le modèle "Corolla" et l'année 2020

// Appel de la méthode start
myCar.start(); // Affiche "Car engine started" dans la console