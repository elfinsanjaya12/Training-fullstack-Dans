import { Route, Routes } from 'react-router-dom';

import Menus from '../pages/Menus';

export function MenusRoute() {
  return (
    <Routes>
      <Route path='' element={<Menus />} />
    </Routes>
  );
}
