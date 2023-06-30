export interface IApiResponse {
    errorCode?: number;
    errorDes?: string;
    errorsDes?: { [key: string]: string };
    payload?: any;
    status?: string;
  }
  export class ApiResponse implements IApiResponse {
    constructor(
      public errorCode?: number,
      public errorDes?: string,
      public errorsDes?: { [key: string]: string },
      public payload?: any,
      public status?: string
    ) {}
  
    public static getDescriptionError(responseBody: any): string {
      let messageResult = '';
      if (responseBody.errorDes) {
        messageResult = responseBody.errorDes;
      } else if (responseBody.errorsDes) {
        Object.entries(responseBody.errorsDes).forEach(([key, value]) => {
          messageResult = messageResult + '\u2022 ' + value + '<br>';
        });
      }
      return messageResult;
    }
  }
  