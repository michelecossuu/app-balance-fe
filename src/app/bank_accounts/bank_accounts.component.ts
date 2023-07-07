import { Component } from '@angular/core';

import * as labels from '../../assets/labels/labels.json';

import { IBankAccount } from '../shared/model/bankAccount.model';
import { BankAccountService } from '../shared/service/bankaccount.service';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank_accounts.component.html',
  styleUrls: ['./bank_accounts.component.scss']
})
export class BankAccountsComponent {
  labels = labels;
  isAddDialogOpen: boolean = false;
  isConfirmDialogOpen: boolean = false;
  bankAccounts: IBankAccount[] = [];
  toDeleteBankAccount: IBankAccount | undefined;
  totalBalance: number = 0;

  constructor(
    private bankAccountService: BankAccountService
  ) {}

  /**
   * Calcolo il Total Balance una volta sola
   */
  ngOnInit(): void {
    this.getBankAccounts();
  }
  
  /**
   * Metodo per calcolare il Total Balance
   */
  setTotalBalance(): void {
    this.totalBalance = 0;

    this.bankAccounts.forEach(element => {
      if(element.balance)
        this.totalBalance += element.balance;
    });
  }

  /**
   * Aprire Dialog per aggiungere un Bank Account
   */
  openBankAccountDialog(): void {
    this.isAddDialogOpen = true;
  }

  onSaveBankAccount(newBankAccountName: string): void {
    console.log('onSaveBankAccount - Testo inserito:', newBankAccountName);
    this.isAddDialogOpen = false;
    this.saveBankAccount(newBankAccountName);
  }

  onCancelBankAccount(): void {
    this.isAddDialogOpen = false;
  }

  /**
   * Aprire dialog per conferma dell'eliminazione del bank account
   */
  openConfirmDialog(bankAccount: IBankAccount): void {
    this.isConfirmDialogOpen = true;
    this.toDeleteBankAccount = bankAccount;
  }

  onDeleteBankAccount(): void {
    console.log('onDeleteBankAccount - Elimino bank account: ', this.toDeleteBankAccount);
    if(this.toDeleteBankAccount) {
      if(this.toDeleteBankAccount.id) {
        this.deleteBankAccount(this.toDeleteBankAccount.id);
      } else {
        console.log("onDeleteBankAccount - L'id del bank account è undefined");
      }
    } else {
      console.log('onDeleteBankAccount - Il bank account è undefined');
    }
    this.isConfirmDialogOpen = false;
  }

  onCancelDelete(): void {
    this.isConfirmDialogOpen = false;
  }

  /**
   * Metodo che chiama il service per ricevere la lista di
   * tutti i bank accounts e setta il total balance
   */
  getBankAccounts(): void {
    this.bankAccountService.getBankAccounts().subscribe(response => {
      if (response.body && response.body.payload) {
        this.bankAccounts = response.body.payload;
        this.setTotalBalance();
        console.log('getBankAccounts - i bank accounts sono: ' + response.body.payload);
      } else {
        console.log('getBankAccounts - errore con il body o con il payload');
      }
    },
    error => {
      console.error(error);
    });
  }

  saveBankAccount(bankAccount: string): void {
    this.bankAccountService.saveBankAccount(bankAccount).subscribe(response => {
      if (response.body && response.body.payload) {
        console.log('saveBankAccount - aggiunto il bank account: ' + response.body.payload);
        this.ngOnInit();
      } else {
        console.log('saveBankAccount - errore con il body o con il payload');
      }
    },
    error => {
      console.error(error);
    });
  }

  deleteBankAccount(id: number) {
    this.bankAccountService.deleteBankAccount(id).subscribe(response => {
      if (response.body && response.body.payload) {
        console.log('deleteBankAccount - eliminato il bank account con id: ' + id);
        this.ngOnInit();
      } else {
        console.log('deleteBankAccount - errore con il body o con il payload');
      }
    },
    error => {
      console.error(error);
    });
  }

}