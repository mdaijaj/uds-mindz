import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererParams } from 'ag-grid-community';
import { VendorManagementService } from 'src/app/@shared/services/vendor-management.service';
import { ScheduledInstallDialog } from '../../scheduled-install-dialog/scheduled-install-dialog.component';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  cellValue: any;
  constructor(private route: Router,
    public dialog: MatDialog,
    private vendorService: VendorManagementService) {}
  ngOnInit(): void {
    
  }

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.data;
  }

  openDialog(e: any){
    console.log("e data is ",this.cellValue)
    const dialogRef = this.dialog.open(ScheduledInstallDialog, { width: '650px', data: this.cellValue });
      dialogRef.afterClosed().subscribe(result => {
      })
  }
}