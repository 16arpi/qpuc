# Régie *Question pour un champion*

Programme qui recrée les interfaces du jeu Questions pour un champion. Je l'ai développé pour une surprise lors d'un anniversaire.

Il consiste en une page web de régie (qui reste sur l'écran d'ordinateur) et d'une page web de simulation du jeu (à mettre sur un écran distant type tv ou vidéo projecteur).

Il y a des bruitages. Le projet est fortement inspiré par un projet similaire de [Stéphane Balaguer](https://github.com/StephaneBalaguer/).

## Installation

Nécessite `npm` et `node`.

```bash
$ npm install
$ node app.js
```

## Utilisation

Par défaut, le serveur se trouve à cette adresse : `http://localhost:8081`. Il y a deux pages :

* `/` : la page des interfaces (9 points gagants, 4 à la suite, face à face etc.)
* `/master.html` : la page de la régie, qui contrôle les autres vues.

Pour l'adapter à vos propres thèmes et images, il faut fouiller dans le code mais j'ai essayé de rendre le truc assez générique.
