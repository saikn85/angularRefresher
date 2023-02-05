import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Album } from "../album";

@Component({
    selector: "app-product-tracklisting",
    templateUrl: "./product-tracklisting.component.html",
    styleUrls: ["./product-tracklisting.component.css"],
})
export class ProductTracklistingComponent implements OnInit {
    albumInfo: Album | undefined;
    constructor(private _productService: ProductService) {}
    ngOnInit(): void {
        this._productService.getAlbum(1).subscribe((resp: any) => {
            this.albumInfo = resp?.album;
        });
    }
}
