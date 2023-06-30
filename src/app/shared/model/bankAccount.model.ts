export interface IBankAccount {
    id?: number;
    name?: string;
    balance?: number;
  }
  
  export class BankAccount implements IBankAccount {
    id?: number;
    name?: string;
    balance?: number;
  
    constructor() {}
  }
  