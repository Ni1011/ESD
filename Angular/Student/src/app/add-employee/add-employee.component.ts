import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  method: string = 'add';
  formObj: any = { id: undefined, name: undefined, email: undefined, phone: undefined};

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.current_page = 'add';

    this.route.queryParams.subscribe((params: any) => {
      if ('id' in params) {
        this.formObj = this.commonService.formObj;
        this.method = 'update';
      }
      else {
        this.method = 'add';
      }
    });
  }

  onSubmit() {
    if (this.method == 'add') {
      this.httpService.addEmployee(this.formObj.id, this.formObj.name, this.formObj.email, this.formObj.phone).pipe(first()).subscribe(
        data => {
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
          alert("Error");
        }
      );
    }
    else {
      this.httpService.updateEmployee(this.formObj._id, this.formObj.id, this.formObj.name, this.formObj.email, this.formObj.phone).pipe(first()).subscribe(
        data => {
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
          alert("Error");
        }
      );
    }
  }

}
