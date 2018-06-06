const mapRestaurant = document.querySelector('#map');
const filter  = document.querySelector('.filter-options');
const neighborhoodsFilter = document.querySelector('#neighborhoods-select');
const cuisinesFilter = document.querySelector('#cuisines-select');
const restaurantsList = document.querySelector('#restaurants-list');
const restaurantContainer = document.querySelector('#restaurant-container');
const reviewsContainer = document.querySelector('#reviews-container');

// Attribute of map
mapRestaurant.setAttribute('role', 'map');
mapRestaurant.setAttribute('aria-label', 'map');

// Attribute of filter
filter.setAttribute('role', 'filter');

// Attribute of neighborhoods
neighborhoodsFilter.setAttribute('role', 'neighborhoods');
neighborhoodsFilter.setAttribute('aria-label', 'choose the neighborhoods');
neighborhoodsFilter.setAttribute('aria-labelledby', 'filter');
neighborhoodsFilter.setAttribute('aria-activedescendant', 'neighborhoods-select');

// Attribute of cuisines
cuisinesFilter.setAttribute('role', 'cuisines');
cuisinesFilter.setAttribute('aria-label', 'choose the cuisines');
cuisinesFilter.setAttribute('aria-labelledby', 'filter');
cuisinesFilter.setAttribute('aria-activedescendant', 'cuisines-select');

// Attribute of restaurant list
restaurantsList.setAttribute('role', 'restaurantslist');
restaurantsList.setAttribute('aria-label', 'restaurants list');

// Attribute of restaurant container
restaurantContainer.setAttribute('role', 'restaurantcontainer');
restaurantContainer.setAttribute('aria-label', 'restaurant container');

// Attribute of reviews container
reviewsContainer.setAttribute('role', 'reviewscontainer');
reviewsContainer.setAttribute('aria-label', 'reviews container');