import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfo from '@/components/UserInfo';
import { client } from '@/utils/apollo';
import { routes } from './routes/menus';
import { ROUTE_COMPONENT } from './routes';

import './index.css';
import Login from './containers/Login';
import Layout from './components/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <UserInfo>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {
              routes.map((item) => {
                const Component = ROUTE_COMPONENT[item.key];

                return (
                  <Route path={item.path} key={item.key} element={<Component />} />
                );
              })
            }
          </Route>
        </Routes>
      </UserInfo>

    </BrowserRouter>

  </ApolloProvider>,
);
