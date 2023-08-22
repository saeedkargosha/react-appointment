import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from './error';
import RootLayout from './layout';
import HomePage from './home';
import InfoPage from './info';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />} element={<RootLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/info/:time' element={<InfoPage />} />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;
export default Router;
