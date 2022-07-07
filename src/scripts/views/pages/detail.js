import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteIdb from '../../data/favorite-idb';

const Detail = {
  async render() {
    return `
      <div id="detail" class="detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(cafe);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteIdb,
      restaurant: {
        id: cafe.id,
        name: cafe.name,
        pictureId: cafe.pictureId,
        description: cafe.description,
        rating: cafe.rating,
        city: cafe.city,
      },
    });
  },
};

export default Detail;
