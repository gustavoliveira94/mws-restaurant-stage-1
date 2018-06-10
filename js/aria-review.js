const navigation = document.querySelector('header nav');
const mapRestaurant = document.querySelector('#map');
const restaurantContainer = document.querySelector('#restaurant-container');
const reviewsContainer = document.querySelector('#reviews-container');

// NAVIGATION
if(navigation) {
    navigation.setAttribute('role', 'navigation');
    navigation.setAttribute('aria-label', 'navigation');
}

// Attribute of map
mapRestaurant.setAttribute('role', 'map');
mapRestaurant.setAttribute('aria-label', 'map');

// Attribute of restaurant container
restaurantContainer.setAttribute('role', 'restaurantcontainer');
restaurantContainer.setAttribute('aria-label', 'restaurant container');

// Attribute of restaurant list
reviewsContainer.setAttribute('role', 'reviewlist');
reviewsContainer.setAttribute('aria-label', 'review list');