import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../http/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let ignoreRoutes = ['/auth'];

        let user = this.authService.getUser()
        let needsToken = true;

        ignoreRoutes.forEach(route => {
            if (httpRequest.url.indexOf(route) !== -1) {
                needsToken = false;
            }
        });

        if (needsToken) {
            httpRequest = httpRequest.clone({
                setHeaders: {
                    token: user.token as string
                }
            });
        }

        return next.handle(httpRequest);
    }
}