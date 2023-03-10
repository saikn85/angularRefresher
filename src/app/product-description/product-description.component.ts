import { Component, OnInit } from "@angular/core";
import { Album } from "app/album";
import { ProductService } from "app/product.service";

@Component({
    selector: "app-product-description",
    templateUrl: "./product-description.component.html",
    styleUrls: ["./product-description.component.css"],
})
export class ProductDescriptionComponent implements OnInit {
    albumInfo: Album | undefined;
    constructor(private _productService: ProductService) {}
    ngOnInit() {
        this._productService.getAlbum(1).subscribe((resp: any) => {
            this.albumInfo = resp?.album;
        });
    }
}
