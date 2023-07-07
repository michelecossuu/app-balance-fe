import { Component, EventEmitter, Output } from '@angular/core';

import * as labels from '../../../assets/labels/labels.json'; 
import { IBankAccount } from 'src/app/shared/model/bankAccount.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm_dialog.component.html',
  styleUrls: ['./confirm_dialog.component.scss']
})
export class ConfirmDialogComponent {
  labels = labels;
  
  @Output() confirmClicked: EventEmitter<IBankAccount> = new EventEmitter<IBankAccount>();
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter<void>();

  confirm(): void {
    this.confirmClicked.emit();
  }

  cancel(): void {
    this.cancelClicked.emit();
  }

}
