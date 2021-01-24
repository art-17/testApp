import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  isExpanded: boolean = true;
  constructor(private httpclient:HttpClient) {}



  getData(): Observable<any>{
        let url="/assets/json/data.json";
        
        return  this.httpclient.get(url);
    
    }
  
}
