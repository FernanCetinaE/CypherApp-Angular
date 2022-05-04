import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desencriptar',
  templateUrl: './desencriptar.component.html',
  styleUrls: ['./desencriptar.component.css']
})
export class DesencriptarComponent implements OnInit {

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
    this.secretOutPut = CryptoJS.AES.decrypt(this.userInput,this.userKey).toString(CryptoJS.enc.Utf8);

    if(!this.secretOutPut) this.secretOutPut = "Invalid key 😥";
    console.log("input",this.userInput," key",this.userKey);
    console.log("after: "+CryptoJS.AES.decrypt(this.userInput,this.userKey).toString(CryptoJS.enc.Utf8));
  }


}
