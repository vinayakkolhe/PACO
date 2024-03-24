import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from "rxjs";
import { Product, ProductsServics } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public ProductList : Product[]

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private productService: ProductsServics){
    
      this.ProductList = productService.ProductList

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((e:any)=>{
      this.activeRoute = e.url
      if(e.url == "/" || e.url == "") this.isHomePage = true
      else {
        this.isHomePage = false
        this.setNavClass()
      }
    })
  }

  private isHomePage = false; 
  private activeRoute = "";

  @ViewChild("header")
  header:ElementRef | undefined;

  @ViewChild("navbar")
  navbar: ElementRef | undefined;

  @ViewChild("closeMenu")
  closeMenu: ElementRef | undefined;
  
  // Toggle .header-scrolled class to #header when page is scrolled
  @HostListener('window:scroll') 
  onScroll(e: Event): void {
    this.setNavClass()
  }

  private setNavClass(){
    if(this.isHomePage && window.scrollY < 100)
      this.header?.nativeElement.classList.remove('header-scrolled')
    else
      this.header?.nativeElement.classList.add('header-scrolled')
  }

  // Toggle css class to #navbar #closeMenu when nav button is pressed
  public onNavExpandClick(){
    this.navbar?.nativeElement.classList.toggle('navbar-mobile');
    this.closeMenu?.nativeElement.classList.toggle('bi-list')
    this.closeMenu?.nativeElement.classList.toggle('bi-x')
   }

   public isActiveRoute(routeUrl:string) : boolean{
    if(this.activeRoute == routeUrl) return true;
    else return false;
   }

   public onNavMenuClick(){
    this.navbar?.nativeElement.classList.remove('navbar-mobile');
    this.closeMenu?.nativeElement.classList.add('bi-list')
    this.closeMenu?.nativeElement.classList.remove('bi-x')
   }
}
