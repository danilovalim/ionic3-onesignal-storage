import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {
public token:any;
  constructor(public http: HttpClient) {
  }

}
