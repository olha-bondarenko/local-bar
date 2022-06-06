import { Component, OnInit } from '@angular/core';
import { Coctail } from 'src/app/models/coctails.model';
import { LocalBarService } from 'src/app/service/local-bar.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.less']
})
export class CheckoutPageComponent implements OnInit {
  drinks: Coctail[] | undefined
  constructor( private service: LocalBarService) { }

  ngOnInit(): void {
    this.getCartCoctails()
  }

  getCartCoctails() {
    this.service.getCartCoctails()
    .subscribe((data) => {
      this.drinks = data;
    })
  }

}
