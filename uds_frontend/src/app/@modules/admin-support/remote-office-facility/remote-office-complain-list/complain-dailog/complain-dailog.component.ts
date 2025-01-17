import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminSupportService } from 'src/app/@shared/services/admin-support.service';

@Component({
  selector: 'app-complain-dailog',
  templateUrl: './complain-dailog.component.html',
  styleUrls: ['./complain-dailog.component.scss']
})
export class ComplainDailogComponent {
  localTime:any;
  fromDate: any;
  toDate: any;
  id: any;
  singleData: any;
  constructor(public dialog: MatDialogRef<ComplainDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminSupportService,
   ) {
    this.id = this.data.id;
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
   this.adminService.getSingleInward(this.id).subscribe((res:any)=>{
    this.singleData = res.data;     
   })
  }
}
