# 🛍️ TechStore - E-commerce Angular Application

Une application e-commerce moderne développée avec Angular 15, Bootstrap et les dernières normes web 2025.

## ✨ Fonctionnalités

- 🏪 **Catalogue Produits** : Affichage des produits avec filtres par catégorie
- 🛒 **Panier d'Achat** : Gestion du panier avec quantités
- 📱 **Design Responsive** : Interface adaptée mobile/tablet/desktop
- 🎨 **UI Moderne** : Design system cohérent avec animations
- 🔐 **Administration** : Interface d'administration pour gérer les produits
- ⚡ **Performance** : Optimisé pour la vitesse et l'accessibilité

## 🚀 Technologies Utilisées

- **Frontend** : Angular 15, TypeScript
- **UI Framework** : Bootstrap 5
- **Icons** : Font Awesome 6
- **API** : Fake Store API pour les données de démonstration
- **Styling** : CSS moderne avec variables custom

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/sanarouch/techstore-angular.git

# Naviguer dans le dossier
cd techstore-angular

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

## 🌐 Utilisation

L'application sera accessible sur `http://localhost:4200`

### Pages Disponibles :
- **Accueil** : `/` - Page d'accueil avec catalogue
- **Produit** : `/product/:id` - Détails d'un produit
- **Administration** : `/admin` - Dashboard administrateur
- **Gestion Produits** : `/admin/product/liste` - Liste des produits
- **Ajouter Produit** : `/admin/product/ajouter` - Formulaire d'ajout

## 🏗️ Structure du Projet

```
src/
├── app/
│   ├── commun/          # Composants partagés
│   │   ├── menu/        # Navigation principale
│   │   └── footer/      # Pied de page
│   ├── front/           # Pages publiques
│   │   ├── accueil/     # Page d'accueil
│   │   ├── article/     # Détail produit
│   │   └── not-found/   # Page 404
│   ├── back/            # Administration
│   │   ├── dashboard/   # Tableau de bord
│   │   └── article/     # Gestion produits
│   └── service/         # Services Angular
├── assets/              # Ressources statiques
└── styles.css          # Styles globaux
```

## 🎨 Design System

- **Couleurs** : Palette moderne avec variables CSS
- **Typographie** : Inter font avec hiérarchie claire
- **Espacement** : Système 8px pour cohérence
- **Composants** : Cards, boutons, inputs standardisés

## 📱 Responsive Design

- **Mobile First** : Optimisé pour mobile puis desktop
- **Breakpoints** : 576px, 768px, 992px, 1200px
- **Grid System** : CSS Grid et Flexbox modernes
- **Touch Friendly** : Tailles de boutons adaptées tactile

## 🔧 Scripts Disponibles

- `npm start` : Lancer en mode développement
- `npm run build` : Build de production
- `npm test` : Lancer les tests
- `npm run lint` : Vérification du code

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

Sana Rouch - [@sanarouch](https://github.com/sanarouch)

---

**TechStore** - Votre destination premium pour les produits high-tech 🚀