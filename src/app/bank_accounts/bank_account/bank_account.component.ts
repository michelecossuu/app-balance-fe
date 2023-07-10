import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBankAccount } from 'src/app/shared/model/bankAccount.model';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank_account.component.html',
  styleUrls: ['./bank_account.component.scss']
})
export class BankAccountComponent {
  bankAccount!: IBankAccount;
  bankAccountId?: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const accountData = this.route.snapshot.paramMap.get('accountData');
    if (accountData) {
      const account = JSON.parse(accountData);
      console.log("account", account);
      if (accountData !== null && accountData !== undefined) {
        this.bankAccount = account;
      }
      
      // Utilizza i dati dell'account come desiderato
    }
  }
  
}