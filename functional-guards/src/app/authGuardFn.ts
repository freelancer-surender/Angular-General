import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

export const authGuardFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.isLoggedIn) {
        return true;
    }
    router.navigate(['access-denied']);
    return false;
}