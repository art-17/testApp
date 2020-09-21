import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {
  token:string;
  baseurl: string = environment.SERVICE_APIS.baseUrl
  constructor(private httpclient: HttpClient,private sharedService:SharedService) { }

  setHeader() {
    // let localuserdata = this.sharedService.getLocaldata();
    this.token = '';
    return new HttpHeaders().set('Content-Type', 'application/json').set('Accept-Language', this.sharedService.LANGUAGE)
      .set('token', this.token);
  }
  noauthPost(url, data) {
    const Url = this.baseurl + url
    return this.httpclient.post(Url, data).pipe(
      catchError(errorRes => {
        return this.handleError(errorRes);
      }), tap(resData => {
        
      }));
  }

  private handleError(errorRes) {
    console.log("ERROR", errorRes);
    let errorMessage = 'Internal Server error'
    if (errorRes.error && (errorRes.error.status_msg || errorRes.error.statusMsg)) {
      errorMessage = errorRes.error.status_msg || errorRes.error.statusMsg;
      return throwError(errorMessage);
    }
    return throwError(errorMessage);
  }
}
