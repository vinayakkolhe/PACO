import {Injectable} from "@angular/core"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Injectable({
    providedIn:"root"
})
export class ProductsServics{
    public ProductList : Product[];
    /**
     *
     */
    constructor(private sanitizer: DomSanitizer) {
        this.ProductList = [
            new Product("CARTON-COLLATOR-MACHINE",
                new Prop("CARTON COLLATOR MACHINE", this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ijKf4yx5a7g?si=vM1SECYYCwmgxbH2"),
                ["assets/img/products/Carton_Collator_Machine1.jpg", "assets/img/products/Carton_Collator_Machine2.jpg","assets/img/products/Carton_Collator_Machine3.jpg"],
                "https://drive.google.com/file/d/1bB4K24H13_mw1TQrKSXf9bz6l18kPvaH/view?usp=drive_link")),
            
        ]        
    }

    public getProductDetails(Id:string) : Product|undefined {
        var prod = this.ProductList.find(p => p.Id == Id)
        return prod
    }
}




export class Product{
    constructor(id:string,prop:Prop) {
        this.Id = id
        this.Prop = prop
    }
    public Id : string
    public Prop :Prop
}

export class Prop{
    constructor(name: string, iframe:SafeResourceUrl, images:string[], boucherLink:string) {
        this.Name = name
        this.IFrame = iframe
        this.Images = images
        this.BoucherLink = boucherLink
    }
    public Name!: string
    public IFrame!: SafeResourceUrl
    public Images!: string[]
    public BoucherLink!: string
}