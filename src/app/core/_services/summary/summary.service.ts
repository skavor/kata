import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private httpClient: HttpClient) { }

  deleteData() {
    return this.httpClient.delete(`${environment.apiUrl}/delete`)
  }
}
