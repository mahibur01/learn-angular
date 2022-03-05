import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsToolsComponent } from './leads-tools/leads-tools.component';
import { DownloadPdfComponent } from './leads-tools/download-pdf/download-pdf.component';
import { DownloadExcelComponent } from './leads-tools/download-excel/download-excel.component';



@NgModule({
  declarations: [LeadsListingComponent, LeadsToolsComponent, DownloadPdfComponent, DownloadExcelComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
