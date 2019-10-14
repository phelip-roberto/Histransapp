import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {
  cript = '123456$#@$^@1ERF';

  key = CryptoJS.enc.Utf8.parse(this.cript);
  iv = CryptoJS.enc.Utf8.parse(this.cript);

  constructor() { }

  encrypt(value) {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), this.key,
    {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();

  }

  decript(value) {
    const decrypted = CryptoJS.AES.decrypt(value, this.key, {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
