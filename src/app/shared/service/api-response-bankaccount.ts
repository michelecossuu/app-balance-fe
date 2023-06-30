import { ApiResponse } from '../model/api-response';
import { IBankAccount } from '../model/bankAccount.model';

export class ApiResponseBankAccounts extends ApiResponse {
  override payload?: IBankAccount[];
}
