import { Route, Routes } from 'react-router-dom';

import { EditDish } from '../pages/EditDish';
import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { SingleDish } from '../pages/SingleDish';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<SingleDish />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit-dish/:id" element={<EditDish />} />
    </Routes>
  )
}