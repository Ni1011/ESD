import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  current_page: string = 'add';
  formObj: any;

  constructor() { }
}
