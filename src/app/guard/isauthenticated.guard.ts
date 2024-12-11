import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { tap } from 'rxjs/operators';

export const IsAuthenticatedGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate(['login']);
      }
    })
  );
};
