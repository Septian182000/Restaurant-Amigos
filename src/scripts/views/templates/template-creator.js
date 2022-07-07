import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (cafe) => `
  <h1 class="restaurant_title" tabindex="0">${cafe.name}</h1>
  <img class="restaurant_poster lazyload" tabindex="0" alt="${cafe.name}" data-src="${cafe.pictureId ? CONFIG.BASE_IMAGE_URL + cafe.pictureId : 'https://restaurant-api.dicoding.dev/images/large'}">
  <h3 class="title-info" tabindex="0">Information</h3>
  <div class="restaurant_info">
    <p><i class="fa-solid fa-star rate-detail" tabindex="0"></i>${cafe.rating}</p>
    <p><i class="fa-solid fa-location-dot location-detail" tabindex="0"></i>${cafe.city}</p>
    <p><i class="fa-solid fa-map-location location-detail" tabindex="0"></i>${cafe.address}</p>
  </div>
  <div class="restaurant_overview">
    <h3 tabindex="0">Deskripsi</h3>
    <p tabindex="0">${cafe.description}</p>
  </div>
  <div class="detail-restaurant-menu">    
    <h2 tabindex="0">Menu</h2>
    
    <div class="restaurant-menu">
        <ul>
            <h3 class="title-item" tabindex="0">Food</h3>
            ${cafe.menus.foods
    .map(
      (food) => `
      <li tabindex="0"><p><i class="fas fa-utensils"></i> ${food.name}</p></li>
    `,
    )
    .join('')}
        </ul>
        
        <ul>
            <h3 class="title-item" tabindex="0">Drink</h3>
            ${cafe.menus.drinks
    .map(
      (drink) => `
        <li tabindex="0"><p><i class="fas fa-cocktail"></i> ${drink.name}</p></li>
                `,
    )
    .join('')}
        </ul>
    </div>
  </div> 
  <div class="restaurant_reviews">
    <h3 tabindex="0">Reviews</h3>
    ${cafe.customerReviews.map((review) => `
        <div class="restaurant_list_reviews">
            <h6 tabindex="0" class="name-review">${review.name}</h6>
            <p tabindex="0" class="date-review">${review.date}</p>
            <p tabindex="0" class="review">${review.review}</p>
        </div>
    `).join('')}
</div>
`;

const createRestaurantItemTemplate = (cafe) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <a href="${`/#/detail/${cafe.id}`}">
            <img class="restaurant-item_header_poster lazyload" tabindex="0" alt="${cafe.name}" data-src="${cafe.pictureId ? CONFIG.BASE_IMAGE_URL + cafe.pictureId : 'https://restaurant-api.dicoding.dev/images/large'}">  
        </a>
        <div class="restaurant-item_rating">
            <p tabindex="0">⭐️<span class="restaurant-item_rating_value">${cafe.rating}</span></p>
        </div>
        <div class="restaurant-item_city">
            <p tabindex="0"><i class="fa-solid fa-location-dot"><span class="restaurant-item_city_value">${cafe.city}</span></i></p>
        </div>
    </div>
    <div class="restaurant-item_content">
        <h1 class="restaurant_title"><a href="${`/#/detail/${cafe.id}`}">${cafe.name}</a></h1>
        <p tabindex="0">${cafe.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
