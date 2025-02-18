import {
  appRoutes,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to={HOME_ROUTE}>Home</NavLink>
          <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
          <NavLink to={REGISTER_ROUTE}>Register</NavLink>
          <NavLink to={LOGIN_ROUTE}>Login</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
