import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { BankAccountsComponent } from './bank_accounts/bank_accounts.component';
import { BankAccountComponent } from './bank_accounts/bank_account/bank_account.component';

@NgModule({
  declarations: [
    HomeComponent,
    BankAccountsComponent,
    BankAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
