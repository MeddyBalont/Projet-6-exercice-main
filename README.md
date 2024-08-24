<!-- ABOUT THE PROJECT -->
##  About The Project <a name = "about-the-project"></a>

L’entreprise souhaite désormais développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”. Même si l’application deviendra peut-être un magasin en ligne dans un futur proche, Sophie, la product owner de So Pekocko, a décidé que le MVP du projet sera une application web permettant aux utilisateurs d’ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par les autres utilisateurs.


#### CONTRAINTES

Utiliser les bonnes pratiques de l'OWASP pour sécuriser l'API
Les données utilisateur doivent être protégées côté API et base de donnée grâce à des méthodes de masquage.
Projet hébergé par un serveur Node.js.
Base de données sous MongoDB et utilisation du framework Express.
Utiliser un plugin Mongoose pour signaler toute erreur de la base de données.

#### Sécurité:
* L’API doit respecter le RGPD et les standards OWASP.
* Le mot de passe des utilisateurs doit être chiffré.
* 2 types de droits administrateur à la base de données doivent être définis : un accès pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base de données.
* La sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis sa machine.
* L’authentification est renforcée sur les routes requises.
* Les mots de passe sont stockés de manière sécurisée.
* Les adresses mails de la base de données sont uniques et un plugin Mongoose approprié est utilisé pour s’assurer de leur caractère unique et rapporter des erreurs.
* Toutes les routes relatives à la sauce doivent exiger une demande authentifiée (contenant un jeton valide dans son en-tête d'autorisation).
* Toutes les opérations de la base de données doivent utiliser le pack Mongoose avec des schémas de données stricts.



###  Objectives <a name = "objectives"></a>

* Implémenter un modèle logique de données conformément à la réglementation
* Stocker des données de manière sécurisée
* Mettre en œuvre des opérations CRUD de manière sécurisée



###  Built With <a name = "built-with"></a>

-Backend

* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/fr/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)


-Frontend

*Made by OpenClassrooms

Voici quelques étapes avant de lancer le projet:
- Télécharger Node.js si besoin
- Ouvrir le backend et faire cette ligne de commande `npm install`
- Rentrez vos données d'environnement grâce à l'exemple dans `.env.example`
- Vous pouvez ensuite lancer le serveur soit avec `nodemon server`

