import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { Role } from '../model/usermodel';

export const HasRoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data?.['role']; // Get the role from route data
  const userRoles =  authService.user?.roles.map((role: Role) => role.authority) || [];

  const isAuthorized = userRoles.includes(requiredRole);

  if (!isAuthorized) {
    window.alert('You are not authorized');
    return router.createUrlTree(['home']); // Redirect to unauthorized page or login
  }

  return true; // Allow navigation if authorized
};

// follow this for reference: https://www.youtube.com/watch?v=YJ4dgoHEmGs&ab_channel=CodeShotsWithProfanis 