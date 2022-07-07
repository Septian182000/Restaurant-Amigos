import FavoriteIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading" tabindex="0">Your Favorites</h1>
        <hr>
        <div id="item-restaurant" class="item-restaurant">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#item-restaurant');
    restaurants.forEach((cafe) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(cafe);
    });
  },
};

export default Favorite;
