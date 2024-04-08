import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router";

export const loadGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.isLoggedIn) {
        return true;
    }
    // router.navigate(['user-dashboard']);
    return false;
}