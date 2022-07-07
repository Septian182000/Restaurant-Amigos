import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListCafe = {
  async render() {
    return `
        <hero-header></hero-header>
        <div id="content-header">
            <h1 tabindex="0">All Cafe</h1>
            <hr>
        </div>
        <div id="item-restaurant" class="item-restaurant">

        </div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    console.log(restaurants);

    const restaurantContainer = document.querySelector('#item-restaurant');
    restaurants.forEach((cafe) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(cafe);
    });
  },
};

export default ListCafe;
