import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class IngatlansService {



  constructor(private http: HttpClient) { }

  loadImageMeta(url: string): Observable<Array<Image>>{
    return this.http.get(environment.hostUrl + '/assets/' + url) as Observable<Array<Image>>;
  }

  loadImage(imageUrl: string){
    return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
  }
}
