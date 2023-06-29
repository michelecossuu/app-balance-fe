import { Component } from '@angular/core';
import * as labels from '../../assets/labels/labels.json';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank_accounts.component.html',
  styleUrls: ['./bank_accounts.component.scss']
})
export class BankAccountsComponent {
  labels = labels;
  totalBalance = 0;

  bankAccounts: { name: string, balance: number }[] = [
    { name: 'Conto 1', balance: 1000 },
    { name: 'Conto 2', balance: 2000 },
    { name: 'Conto 3', balance: 3000 },
    { name: 'Conto 4', balance: 4000 }
  ];
  
  /**
   * Metodo per calcolare il Total Balance
   */
  getTotalBalance(): void {
    this.bankAccounts.forEach(element => {
      this.totalBalance += element.balance;
    });
  }
  
  /**
   * Calcolo il Total Balance una volta sola
   */
  ngOnInit(): void {
    this.getTotalBalance();
  }

}