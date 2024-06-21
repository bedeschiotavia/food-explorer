import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '../routes/app.routes';
// import { AuthRoutes } from '../routes/auth.routes';

export function Routes() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}