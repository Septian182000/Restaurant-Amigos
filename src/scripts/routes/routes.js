import ListCafe from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': ListCafe, // default page
  '/list-food': ListCafe,
  '/detail/:id': Detail,
  '/favorite': Favorites,
};

export default routes;
