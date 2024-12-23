import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  url = `https://fakestoreapi.com/products`;
  products: any = [];
  productsResource: any;

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  ngOnInit(): void {
    
  }

  // fetchProducts() {
  //   this.http.get(this.url).subscribe((res) => {
  //     this.products = res;
  //     console.log(this.products);
  //   });
  // }

  // fetchProducts() {
  //   this.productsResource = rxResource({
  //     loader: () => {
  //       return this.http.get(this.url)
  //     }
  //   });
  // }

  fetchProducts() {
    this.productsResource = resource({
      loader: () => {
        return fetch(this.url).then(res => res.json())
      }
    });
  }


}
