import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteIdb from '../../src/scripts/data/favorite-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
