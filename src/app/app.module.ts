import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BankAccountsComponent } from './bank_accounts/bank_accounts.component';
import { BankAccountComponent } from './bank_accounts/bank_account/bank_account.component';

import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BankAccountDialogComponent } from './bank_accounts/bank-account-dialog/bank-account-dialog.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './common_components/confirm_dialog/confirm_dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankAccountsComponent,
    BankAccountComponent,
    BankAccountDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
