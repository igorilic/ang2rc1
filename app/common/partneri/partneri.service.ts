import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPartner } from './partneri';

@Injectable()
export /**
 * PartneriService
 */
class PartneriService {
    private _serverUrl: string = 'http://localhost:5000/';
    private _partnerApiUrl: string = 'api/partneri/';
    
    constructor(private _http: Http) {}
    
    getPartneri(): Observable<IPartner[]> {
        return this._http.get(this._serverUrl + this._partnerApiUrl)
                   .map((response: Response) => response.json())
                   .catch(this.handleError);
    }
    
    getPartner(id: number): Observable<IPartner> {
        return this._http.get(this._serverUrl + this._partnerApiUrl + id.toString())
                   .map((response: Response) => response.json())
                   .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Greška na serveru');
    }
}