<!-- ABOUT THE PROJECT -->
## 🧐 About The Project <a name = "about-the-project"></a>

[![Piquante]

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



### 🎯 Objectives <a name = "objectives"></a>

* Implémenter un modèle logique de données conformément à la réglementation
* Stocker des données de manière sécurisée
* Mettre en œuvre des opérations CRUD de manière sécurisée



### ⛏️ Built With <a name = "built-with"></a>

-Backend

* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/fr/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)


-Frontend

*Made by OpenClassrooms




<!-- GETTING STARTED -->
## 🏁 Getting Started <a name = "getting-started"></a>


<!--
### Prerequisites

Make sure you have [Mysql](https://www.mysql.com/fr/) installed.
 -->
 
 

### Installation

1 - Create a folder named peckoko and get into it

 ```
 mkdir peckoko
 
 cd peckoko
 ```

2 - Clone the backend repository (into peckoco folder).

```
git clone https://github.com/StephaneChimy/projet-6.git
```

(You'll now have a folder named projet-6 in peckoko folder)

3 - Install the frontend from `https://github.com/OpenClassrooms-Student-Center/dwj-projet6` and run node server

```
git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git
```

(You'll now have a dwj-projet6 folder into peckoko folder)

```
cd dwj-projet6

npm install --save node-sass@4.14.1

ng serve
```

(The frontend should run on the 4200 port)

4 - Get back into peckoko/projet-6, get into the backend folder and install it.

```
cd ../projet-6/backend

cd backend

npm install
```

5 - Run npm start (still from the backend folder).

```
npm start
```

(node server should run on port 3000)

6 - You can start playing with the API on `http://localhost:4200/`



<!--
## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.
-->


<!-- USAGE EXAMPLES
## 🎈 Usage <a name = "usage"></a>

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
-->

<!--
_For more examples, please refer to the [Documentation](https://example.com)_
-->


<!-- ROADMAP -->
## 🗺 Roadmap <a name = "roadmap"></a>

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT
## ✍️ Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
-->



## ✍️ Authors <a name = "authors"></a>
- [@stephanechimy](https://github.com/MeddyBalont) - Initial work



<!-- ACKNOWLEDGEMENTS 
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)

-->
