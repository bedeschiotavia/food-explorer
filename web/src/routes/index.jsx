import { BrowserRouter } from 'react-router-dom';

import { USER_ROLE } from '../utils/roles';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from '../routes/admin.routes';
import { AuthRoutes } from '../routes/auth.routes';
import { CustomerRoutes } from './customer.routes';

export function Routes() {

  const { user } = useAuth();

  function AccessRoute(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes/>
        default: <CustomerRoutes/>
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}