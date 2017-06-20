import { Component, ViewChild, ElementRef } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  @ViewChild('barcode') barcode:ElementRef;

  options: BarcodeScannerOptions;
  results: {};
  barcodeValue: string;

  constructor(private barcodeScanner: BarcodeScanner) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
    this.options = {

    }
  }

  async scanBarcode() {
    this.results = await this.barcodeScanner.scan();
  }

  generateBarcode(){
    if(this.barcodeValue){
      JsBarcode(this.barcode.nativeElement, this.barcodeValue);
    }
  }
}


    
