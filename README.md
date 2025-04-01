# Checkpoint TypeScript Fundamentals

Ce projet est une implémentation simple en TypeScript pour démontrer l'utilisation des interfaces, des classes et des méthodes. Il s'agit d'un exercice visant à créer une interface `Vehicule`, une classe `Voiture` qui implémente cette interface, et à tester le fonctionnement de la méthode `start`.

## Structure du projet

- **`vehicule.ts`** : Contient le code source TypeScript.
- **`vehicule.js`** : Fichier JavaScript généré après la compilation du fichier TypeScript.

## Fonctionnalités

1. **Interface `Vehicule`** :
   - Définit les propriétés suivantes :
     - `make` : Marque du véhicule (type `string`).
     - `model` : Modèle du véhicule (type `string`).
     - `year` : Année de fabrication (type `number`).
   - Contient une méthode `start()` qui affiche un message dans la console.

2. **Classe `Voiture`** :
   - Implémente l'interface `Vehicule`.
   - Initialise les propriétés `make`, `model` et `year` via un constructeur.
   - Implémente la méthode `start()` pour afficher le message `"Car engine started"` dans la console.

3. **Instance de la classe `Voiture`** :
   - Une instance est créée avec les valeurs suivantes :
     - `make` : `"Toyota"`
     - `model` : `"Corolla"`
     - `year` : `2020`
   - La méthode `start()` est appelée pour vérifier son fonctionnement.

## Instructions pour exécuter le projet

### Prérequis

- **Node.js** : Assurez-vous que Node.js est installé sur votre machine.
- **TypeScript** : Installez TypeScript globalement si ce n'est pas déjà fait :
  ```bash
  npm install -g typescript
  ```

### Étapes pour exécuter le projet

1. **Compiler le fichier TypeScript** :
   Utilisez la commande suivante pour compiler le fichier `vehicule.ts` en JavaScript :
   ```bash
   tsc vehicule.ts
   ```

2. **Exécuter le fichier JavaScript** :
   Une fois le fichier compilé, exécutez le fichier JavaScript généré avec Node.js :
   ```bash
   node vehicule.js
   ```

3. **Résultat attendu** :
   Vous devriez voir le message suivant dans la console :
   ```
   Car engine started
   ```

## Commandes utilisées

Voici les commandes utilisées pour ce projet :

1. Installer TypeScript globalement :
   ```bash
   npm install -g typescript
   ```

2. Compiler le fichier TypeScript :
   ```bash
   tsc vehicule.ts
   ```

3. Exécuter le fichier JavaScript généré :
   ```bash
   node vehicule.js
   ```

## Structure des fichiers

```
TypeScript_Checkpoint/
├── vehicule.ts   # Code source TypeScript
├── vehicule.js   # Fichier JavaScript compilé
└── README.md     # Documentation du projet
```

## Soumission

Le projet peut être soumis en tant que dépôt GitHub public. Assurez-vous que les fichiers `vehicule.ts`, `vehicule.js` et `README.md` sont inclus dans le dépôt.

## Auteur

- **Nom** : [AbegaTheo]
- **Date** : 1 avril 2025