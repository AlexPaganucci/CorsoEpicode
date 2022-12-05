import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from '../interfaces/photos';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  recuperaPhotos(){
    return this.http.get<Photos[]>('http://localhost:3000/photo').pipe(catchError((err) => {
      throw new Error ('lettura fallita');
    }))
  }
}
