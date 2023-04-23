import { getRouteByKey, routes } from '@/routes/menus';
import { useEffect, useMemo } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

export const useTitle = (title:string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export const useGoTo = () => {
  const nav = useNavigate();
  const back = nav(-1);
  const go = (
    pageKey:string,
    params?: Record<string, string | number>,
  ) => {
    if (!pageKey) {
      nav('/');
      return;
    }

    const route = getRouteByKey(pageKey);

    if (route && route.path) {
      if (!params) {
        nav(`/${route.path}`);
        return;
      }

      // /page/:id params: { id: 1 } => /page/1
      const url = route.path.replace(
        /\/:(\w+)/g,
        (exp: string, exp1: string) => `/${params[exp1]}`,
      );

      nav(`/${url}`);
    }
  };

  return {
    go, back,
  };
};

/**
 * 获取当前 URL 匹配的路由
 */
export const useMatchedRoute = () => {
  const r = useLocation();
  // eslint-disable-next-line max-len
  const route = useMemo(() => routes.find((item) => matchPath(item.path, r.pathname)), [r.pathname]);

  return route;
};
