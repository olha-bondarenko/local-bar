import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coctail } from 'src/app/models/coctails.model';
import { LocalBarService } from 'src/app/service/local-bar.service';

@Component({
  selector: 'app-coctails-list',
  templateUrl: './coctails-list.component.html',
  styleUrls: ['./coctails-list.component.less']
})
export class CoctailsListComponent implements OnInit {
drinks: Coctail[] = []
value = '';
message = '';

  constructor(private service: LocalBarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDefaultList();
  }

  getDefaultList() {
    this.getDrinksByCoctail('a');
  }
  search(e: string) {
    this.getDrinksByCoctail(this.value);
  }

  getDrinksByCoctail(value: string){
    this.service.getDrinks(value)
    .subscribe(data => {
      if (data?.drinks) {
        this.drinks = data.drinks;
        this.message = '';
      }
      else this.message = 'There are no coctails with this name. Try to search again.';
    })
  }

  addToCart(coctail: Coctail) {
    this.service.addCoctail(coctail)
    .subscribe(data => {})
  }

  navigate() {
    this.router.navigate(['checkout'])
  }
}
