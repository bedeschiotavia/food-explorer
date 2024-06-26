import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SingleDish } from '../pages/SingleDish';

export function CustomerRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<SingleDish />} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}