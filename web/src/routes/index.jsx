import { BrowserRouter } from 'react-router-dom';
import { useAuth } from "../hooks/auth";

import { AppRoutes } from '../routes/app.routes';
import { AuthRoutes } from '../routes/auth.routes';

export function Routes() {

  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutes/> : <AuthRoutes />}
    </BrowserRouter>
  )
}