import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceapiService } from 'src/app/serviceapi.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private apiService:ServiceapiService) { }
  public postData(url, data): Observable<any> {
    return this.apiService.Post(url, data);
  }
}
