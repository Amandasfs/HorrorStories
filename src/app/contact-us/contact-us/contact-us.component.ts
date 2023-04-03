import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector:'dialog-elements',
  templateUrl: 'dialog-elements.html',
})
export class DialogElements{
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElements);
  }
}
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
}
