import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.interface';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @Input() ProductInformation: Product
  constructor() { }

  ngOnInit() {
    if (this.ProductInformation === undefined) {
      this.ProductInformation = {
        name: '',
        description: '',
        manufactureDate: new Date,
        expiryDate: new Date
      }
    }
  }
  save() {
    console.log(JSON.stringify(this.ProductInformation));
  }

}
