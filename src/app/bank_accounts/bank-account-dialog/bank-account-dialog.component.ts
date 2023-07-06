import { Component, EventEmitter, Output } from '@angular/core';

import * as labels from '../../../assets/labels/labels.json'; 

@Component({
  selector: 'app-bank-account-dialog',
  templateUrl: './bank-account-dialog.component.html',
  styleUrls: ['./bank-account-dialog.component.scss']
})
export class BankAccountDialogComponent {
  labels = labels;
  newBankAccountName: string = '';
  isInputValid: boolean = false;

  @Output() confirmClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancelClicked: EventEmitter<void> = new EventEmitter<void>();

  confirm(): void {
    if (this.isInputValid) {
      this.confirmClicked.emit(this.newBankAccountName);
    }
  }

  cancel(): void {
    this.cancelClicked.emit();
  }

  validateInput(): void {
    this.isInputValid = this.newBankAccountName.trim() !== '';
  }

}
