import {Component} from '@angular/core';
import {Category} from "../model/category";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent {
  category: Category = new Category(
    null,
    null);

  httpClient: HttpClient;
  route: ActivatedRoute;

  constructor(httpClient: HttpClient, route: ActivatedRoute, private router: Router) {
    this.httpClient = httpClient;
    this.route = route;
  }

  ngOnInit() {
    const categoryId = this.route.snapshot.paramMap.get("id");
    this.httpClient.get("/api/categories" + categoryId).subscribe((response ) =>
    {
      console.log(response);
      this.category = response as Category;

    },(error) => {
      console.log(error);
      if (error.error == ("There it is no category with id: " + categoryId)) {
        this.router.navigate(["/not-found"])
      }
    })
  }
}
