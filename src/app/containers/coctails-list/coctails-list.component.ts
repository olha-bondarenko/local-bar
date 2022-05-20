import { Component, OnInit } from '@angular/core';
import { Coctails } from 'src/app/models/coctails.model';
import { LocalBarService } from 'src/app/service/local-bar.service';

@Component({
  selector: 'app-coctails-list',
  templateUrl: './coctails-list.component.html',
  styleUrls: ['./coctails-list.component.less']
})
export class CoctailsListComponent implements OnInit {
drinks: Coctails[] = []
value = '';
message = '';
  constructor(private service: LocalBarService) { }

  ngOnInit(): void {
    this.getDefaultList();
  }

  getDefaultList() {
    this.getDrinks('a');
  }
  search(e: string) {
    if (e === '') this.getDefaultList();
    this.getDrinks(e);
  }

  getDrinks(value?: string){
    this.service.getCoctailsList(value)
    .subscribe(data => {
      if (data) {
        this.drinks = data?.drinks;
        this.message = '';
      }
      else this.message = 'There are no coctails with this name. Try to search again.';
    })
  }
}
