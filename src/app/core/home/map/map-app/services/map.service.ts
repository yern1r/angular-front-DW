import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import jsonData from '../../../../../../assets/data/KAZ-ADM1.json';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  getMapData(): Observable<any> {
    return of(jsonData);
  }
}