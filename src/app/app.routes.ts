import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BankAccountsComponent } from './bank_accounts/bank_accounts.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bankAccounts', component: BankAccountsComponent }
];