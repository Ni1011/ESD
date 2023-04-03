import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: String = 'http://localhost:3000/student';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.baseUrl.toString())
    .pipe(map(Employee => {
        return Employee;
    }));
  }

  addEmployee(id: any, name: any, email: any, phone: any) {
    return this.http.post(this.baseUrl.toString(), { id, name, email, phone})
    .pipe(map(Employee => {
      return Employee;
    }));
  }

  deleteEmployee(id: any) {
    return this.http.delete(this.baseUrl + '/' + id)
    .pipe(map(Employee => {
        return Employee;
    }));
  }

  updateEmployee(_id: any, id: any, name: any, email: any, phone: any) {
    return this.http.put(this.baseUrl + '/' + _id, { id, name, email, phone})
    .pipe(map(Employee => {
      return Employee;
    }));
  }
}
