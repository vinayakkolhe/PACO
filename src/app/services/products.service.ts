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
                "assets/img/products/Carton_Collator_Machine1.jpg",
                ["assets/img/products/Carton_Collator_Machine1.jpg", "assets/img/products/Carton_Collator_Machine1.jpg","assets/img/products/Carton_Collator_Machine1.jpg"],
                "https://drive.google.com/file/d/1bB4K24H13_mw1TQrKSXf9bz6l18kPvaH/view?usp=drive_link")),

            new Product("BLISTER-CARTON-LINKUP-CONVEYOR",
                new Prop("BLISTER CARTON LINKUP CONVEYOR", this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/w4haINbKXkU?si=xjloe1zOM92FnYPA"),
                "assets/img/products/BLISTER-CARTON-LINKUP-CONVEYOR.jpg", 
                ["assets/img/products/BLISTER-CARTON-LINKUP-CONVEYOR.jpg", "assets/img/products/BLISTER-CARTON-LINKUP-CONVEYOR.jpg","assets/img/products/BLISTER-CARTON-LINKUP-CONVEYOR.jpg"],
                "https://drive.google.com/file/d/1my3V8g5fx4xBQ4VFv4atGppwfWfKDewV/view?usp=sharing")),    
            
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
    constructor(name: string, iframe:SafeResourceUrl, mainImage:string, images:string[], boucherLink:string) {
        this.Name = name
        this.IFrame = iframe
        this.MainImage = mainImage
        this.Images = images
        this.BoucherLink = boucherLink
    }
    public Name!: string
    public IFrame!: SafeResourceUrl
    public MainImage!: string
    public Images!: string[]
    public BoucherLink!: string
}