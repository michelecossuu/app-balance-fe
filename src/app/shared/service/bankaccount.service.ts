import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from 'src/app/app.constants';
import { ApiResponseBankAccounts } from './api-response-bankaccount';

type EntityResponseTypeBankAccounts = HttpResponse<ApiResponseBankAccounts>;

@Injectable({ providedIn: 'root' })
export class BankAccountService {
  public resourceUrl =  SERVER_API_URL + 'bankAccounts';

  constructor(protected http: HttpClient) {}

  getBankAccounts(): Observable<EntityResponseTypeBankAccounts> {
    return this.http.get<ApiResponseBankAccounts>(`${this.resourceUrl}/all`, {
      observe: 'response',
    });
  }

  saveBankAccount(bankAccount: string): Observable<EntityResponseTypeBankAccounts> {
    return this.http.post<any>(`${this.resourceUrl}/newBankAccount`, 
      { "name": bankAccount }, 
      { observe: 'response' });
  }

}
