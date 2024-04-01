import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  const email = localStorage.getItem('email');
  const access_token = localStorage.getItem('access_token');
  const refresh_token = localStorage.getItem('refresh_token');

  if (email && access_token && refresh_token) {
    return true;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
