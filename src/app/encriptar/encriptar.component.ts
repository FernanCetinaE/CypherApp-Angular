import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encriptar',
  templateUrl: './encriptar.component.html',
  styleUrls: ['./encriptar.component.css']
})
export class EncriptarComponent implements OnInit {
  userKey: string;
  userInput: string;
  secretOutPut: string;

  constructor() {
    this.userKey="";
    this.userInput="";
    this.secretOutPut="";
  }

  ngOnInit(): void {
  }

  async executeCypher(){
    var CryptoJS = require("crypto-js");
    var AES = require('crypto-js/aes');
    this.secretOutPut = CryptoJS.AES.encrypt(this.userInput.trim(),this.userKey.trim()).toString();

    console.log(this.secretOutPut);
    console.log("after: "+CryptoJS.AES.decrypt(this.secretOutPut,this.userKey).toString(CryptoJS.enc.Utf8));
  }

}
/*Sources:
https://techclub.tajamar.es/encriptar-desencriptar-con-angular/
https://www.npmjs.com/package/crypto-js 
 */