import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone(
            {
                setHeaders: {
                    'x-rapidapi-key' : 'esGbwrm390mshS2BCl0RALxQRtZTp1w7sFMjsnyJlJzDXVkw0H',
                    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                },

                setParams: {
                    key: '73701eee4d99419cb85762a302f35ed6',
                }
            });
            return next.handle(req);
    }

}

// e40e743af2c94b0c916a8aa618fb4473

// esGbwrm390mshS2BCl0RALxQRtZTp1w7sFMjsnyJlJzDXVkw0H