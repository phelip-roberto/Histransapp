import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsSummaryService {

  apiURL = '/v1/summary';

  constructor(private http: HttpClient) { }

  getSummary(formData) {
    const headers = {
      Authorization: 'bearer ' + localStorage.getItem('token')
    };

    const params = this.formatParams(formData);

    return this.http.get('/histrans' + this.apiURL, {headers, params});
  }

  formatParams(params) {

    params.initial_date = this.formatToString(params.initial_date);
    params.final_date = this.formatToString(params.final_date);
    console.log('formatParams - ', params);
    return params;
  }

  formatToDate(date) {
    if (!date) {
      return;
    }
    const ano = date.substr(0, 2);
    const mes = date.substr(2, 2);
    const dia = date.substr(4, 2);
    const hora = date.substr(6, 2);
    const minuto = date.substr(8, 2);
    const segundo = date.substr(10, 2);
    return dia + '/' + mes + '/20' + ano + ' ' + hora + ':' + minuto + ':' + segundo;
  }

  formatToString(date) {
    if (!date) {
      return;
    }
    const ano = date.getFullYear().toString().substr(-2);
    const mes = ('0' + (date.getMonth() + 1)).slice(-2);
    const dia = ('0' + date.getDate()).slice(-2);
    const horas = ('0' + date.getHours()).slice(-2);
    const minutos = ('0' + date.getMinutes()).slice(-2);
    const segundos = ('0' + date.getSeconds()).slice(-2);
    return ano + mes + dia + horas + minutos + segundos;
  }
}
