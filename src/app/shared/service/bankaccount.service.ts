import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from 'src/app/app.constants';
import { ApiResponseBankAccounts, ApiResponseBankAccount } from './api-response-bankaccount';
import { ApiResponse } from '../model/api-response';

type EntityResponseTypeBankAccounts = HttpResponse<ApiResponseBankAccounts>;
type EntityResponseTypeBankAccount = HttpResponse<ApiResponseBankAccount>;
type EntityGenericResponse = HttpResponse<ApiResponse>;

@Injectable({ providedIn: 'root' })
export class BankAccountService {
  public resourceUrl =  SERVER_API_URL + 'bankAccounts/';

  constructor(protected http: HttpClient) {}

  getBankAccounts(): Observable<EntityResponseTypeBankAccounts> {
    const apiUrl = this.resourceUrl + "all";
    return this.http.get<ApiResponseBankAccounts>(apiUrl, 
      { observe: 'response' });
  }

  saveBankAccount(bankAccount: string): Observable<EntityResponseTypeBankAccounts> {
    const apiUrl = this.resourceUrl + "newBankAccount";
    return this.http.post<any>(apiUrl,
      { "name": bankAccount }, 
      { observe: 'response' });
  }

  deleteBankAccount(id: number): Observable<EntityGenericResponse> {
    const apiUrl = this.resourceUrl + "deleteBankAccount/" + id;
    return this.http.delete<any>(apiUrl,
      { observe: 'response' });
  }

  getBankAccount(id: number): Observable<EntityResponseTypeBankAccount> {
    const apiUrl = this.resourceUrl + id;
    return this.http.get<ApiResponseBankAccount>(apiUrl, 
      { observe: 'response' });
  }

}
