import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
    products: Product[] | undefined;
    constructor(private _productService: ProductService) {}
    ngOnInit(): void {
        this._productService
            .getProducts()
            .subscribe((resp: Product[]) => (this.products = resp));
    }
}
