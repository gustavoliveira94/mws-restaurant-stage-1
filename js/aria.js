const mapRestaurant = document.querySelector('#map');
const filter  = document.querySelector('.filter-options');
const neighborhoodsFilter = document.querySelector('#neighborhoods-select');
const cuisinesFilter = document.querySelector('#cuisines-select');
const restaurantsList = document.querySelector('#restaurants-list');
const restaurantContainer = document.querySelector('#restaurant-container');
const reviewsContainer = document.querySelector('#reviews-container');

mapRestaurant.setAttribute('role', 'map');
mapRestaurant.setAttribute('aria-label', 'map');

filter.setAttribute('role', 'filter');

neighborhoodsFilter.setAttribute('role', 'neighborhoods');
neighborhoodsFilter.setAttribute('aria-label', 'choose the neighborhoods');
neighborhoodsFilter.setAttribute('aria-labelledby', 'filter');
neighborhoodsFilter.setAttribute('aria-activedescendant', 'neighborhoods-select');

cuisinesFilter.setAttribute('role', 'cuisines');
cuisinesFilter.setAttribute('aria-label', 'choose the cuisines');
cuisinesFilter.setAttribute('aria-labelledby', 'filter');
cuisinesFilter.setAttribute('aria-activedescendant', 'cuisines-select');

restaurantsList.setAttribute('role', 'restaurantslist');
restaurantsList.setAttribute('aria-label', 'restaurants list');

restaurantContainer.setAttribute('role', 'restaurantcontainer');
restaurantContainer.setAttribute('aria-label', 'restaurant container');

reviewsContainer.setAttribute('role', 'reviewscontainer');
reviewsContainer.setAttribute('aria-label', 'reviews container');