import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-diaologs',
  templateUrl: './diaologs.component.html',
  styleUrls: ['./diaologs.component.scss']
})
export class DiaologsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DiaologsComponent>) { }

  ngOnInit() {
  }


  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
