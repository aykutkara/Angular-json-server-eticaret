import {AfterContentChecked, Component} from '@angular/core';
import {BasketModel} from "../../models/basket.model";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements AfterContentChecked{

  api : string = "http://localhost:3000/"
  baskets :  BasketModel[] =  [];
  constructor(private _basket : BasketService) {
  }

  ngAfterContentChecked() {
    this.getBaskets();
  }

  getBaskets(){
    this.baskets = this._basket.baskets;
  }
}
