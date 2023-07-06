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
  isDialogOpen: boolean = false;
  bankAccounts: IBankAccount[] = [];
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
    this.isDialogOpen = true;
  }

  onSaveBankAccount(newBankAccountName: string): void {
    console.log('onSaveBankAccount - Testo inserito:', newBankAccountName);
    this.isDialogOpen = false;
    this.saveBankAccount(newBankAccountName);
  }

  onCancelBankAccount(): void {
    this.isDialogOpen = false;

    // Altre azioni da eseguire dopo l'annullamento
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
        console.log('getBankAccounts - aggiunto il bank account: ' + response.body.payload);
        this.ngOnInit();
      } else {
        console.log('getBankAccounts - errore con il body o con il payload');
      }
    },
    error => {
      console.error(error);
    });
  }

}