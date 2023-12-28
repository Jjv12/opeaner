import {  Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../auth/auth.service";

@Component({
    selector       : 'user',
    templateUrl    : './user.component.html',
    encapsulation  : ViewEncapsulation.None,
    exportAs       : 'user'
})
export class UserComponent implements OnInit {

    @Input() showAvatar: boolean = false;

    constructor(private authService:AuthService,private _router: Router) {

    }

    ngOnInit(): void {

    }

    signOut(): void {
      this.authService.signOut();
        this._router.navigate(['/home']);
    }

    navigate(url: string) {
        this._router.navigate([url]);
    }
}
