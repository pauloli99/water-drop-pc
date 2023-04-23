import Home from '@/containers/Home';
import Page404 from '@/containers/Page404';
import My from '@/containers/My';
import { ROUTE_KEY } from './menus';

export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Home,
  [ROUTE_KEY.MY]: My,
  [ROUTE_KEY.PAGE_404]: Page404,
};
