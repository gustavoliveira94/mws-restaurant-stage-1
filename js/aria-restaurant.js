const navigation = document.querySelector('header nav');
const mapRestaurant = document.querySelector('#map');
const filter  = document.querySelector('.filter-options');
const neighborhoodsFilter = document.querySelector('#neighborhoods-select');
const cuisinesFilter = document.querySelector('#cuisines-select');
const restaurantsList = document.querySelector('#restaurants-list');

// NAVIGATION
if(navigation) {
    navigation.setAttribute('role', 'navigation');
    navigation.setAttribute('aria-label', 'navigation');
}

// Attribute of map
if(map) {
mapRestaurant.setAttribute('role', 'map');
mapRestaurant.setAttribute('aria-label', 'map');
}

// Attribute of filter
if(filter) {
filter.setAttribute('role', 'filter');
}

// Attribute of neighborhoods
if(neighborhoodsFilter) {
neighborhoodsFilter.setAttribute('role', 'neighborhoods');
neighborhoodsFilter.setAttribute('aria-label', 'choose the neighborhoods');
neighborhoodsFilter.setAttribute('aria-labelledby', 'filter');
neighborhoodsFilter.setAttribute('aria-activedescendant', 'neighborhoods-select');
}

// Attribute of cuisines
if(cuisinesFilter) {
cuisinesFilter.setAttribute('role', 'cuisines');
cuisinesFilter.setAttribute('aria-label', 'choose the cuisines');
cuisinesFilter.setAttribute('aria-labelledby', 'filter');
cuisinesFilter.setAttribute('aria-activedescendant', 'cuisines-select');
}

// Attribute of restaurant list
if(restaurantsList) {
restaurantsList.setAttribute('role', 'restaurantslist');
restaurantsList.setAttribute('aria-label', 'restaurants list');
}