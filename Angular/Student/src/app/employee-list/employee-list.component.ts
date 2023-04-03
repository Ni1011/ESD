import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  empList: any;

  constructor(private httpService: HttpService, public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.current_page = 'list';

    this.httpService.getEmployees().pipe(first()).subscribe(
      data => {
        this.empList = data;
      },
      error => {
        console.log(error);
        alert("Error");
      }
    );
  }

  onDelete(id: any) {
    this.httpService.deleteEmployee(id).pipe(first()).subscribe(
      data => {
        this.ngOnInit();
      },
      error => {
        console.log(error);
        alert("Error");
      }
    );
  }

}
