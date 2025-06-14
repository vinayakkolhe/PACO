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
                
            new Product("UNIVERSAL-BLISTER-COLLETOR-WITH-MANUAL-PACKING-SYSTEM",
                new Prop("UNIVERSAL BLISTER COLLETOR WITH MANUAL PACKING SYSTEM", this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/9MKvTWGYBW4?si=loqbE40ohsnJY32K"),
                "assets/img/products/UNIVERSAL-BLISTER-COLLETOR-WITH-MANUAL-PACKING-SYSTEM.png", 
                ["assets/img/products/UNIVERSAL-BLISTER-COLLETOR-WITH-MANUAL-PACKING-SYSTEM.png"],
                "https://drive.google.com/file/d/143U-pIXX-a8YWKSDumJyf6Tfdb6xzkgr/view?usp=sharing")), 
                  
            new Product("SWING-CONVEYOR",
                new Prop("SWING CONVEYOR", this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5r62YvQH6-A?si=98ZaGuNWNRqpqaOH"),
                "assets/img/products/SWING-CONVEYOR.png", 
                ["assets/img/products/SWING-CONVEYOR.png"],
                "https://drive.google.com/file/d/1TPtnmNZKa2tFN1G0fa9yHi5mQlYGin9J/view?usp=sharing")), 

             new Product("DEBLISTERING-MACHINE",
                new Prop("DEBLISTERING / DEFOILING MACHINE", this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/vbZ7fwVKSYo?si=sxnznm4vFcuc5sID"),
                "assets/img/products/DEBLISTERING-MACHINE.jpg", 
                ["assets/img/products/DEBLISTERING-MACHINE.jpg"],
                "https://drive.google.com/file/d/1NPpT1FImBkoC4LqsKtK_yMgMsauztEDR/view?usp=sharing")), 
            
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