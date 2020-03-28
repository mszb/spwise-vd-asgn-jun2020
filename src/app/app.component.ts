import { Component } from '@angular/core';
import { Item, ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spvis';
  items: Array<Item>;

  constructor(private apiService: ApiService) {}

  fxetchData(){
    this.apiService.fetch().subscribe()
  }

  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<Item>) => {
        console.log(data);
        this.items = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(){
    //this.fetchData();
  }


}
