import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {OAuthModule} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';
import {AuthService} from "./auth.service";

@NgModule({
    imports  : [
        HttpClientModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: ['http://localhost:9094/'],
                sendAccessToken: true
            }
        })
    ]
})
export class AuthModule {
    constructor(private authService: AuthService) {
        this.authService.configure(authConfig);
        this.authService.runInitialLoginSequence().then();
    }
}
