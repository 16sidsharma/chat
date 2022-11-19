
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  headerOff: boolean = true;
  headerOffRating: boolean = true;

  defaultTheme = "light";
  dark: boolean;
  light: boolean;
  gradient: boolean;
  yellow: boolean;
  @ViewChild('bg', { static: false }) bg: ElementRef;



  constructor(
    private renderer: Renderer2,
    private router: Router, 
    private location: Location, 
    public platform: Platform,
    private auth: AuthService,
    private nav: NavController,
    private menuCtrl: MenuController
    ) {
      const restrictPage = ['/login','/signup','/'];
      this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) { 
          if(restrictPage.includes(ev.urlAfterRedirects)) {
            this.menuCtrl.enable(false);
            this.headerOff = false;
          }else{
            this.headerOff = true;
            this.menuCtrl.enable(true);
          }
        }
      });
    this.setDefault();
  }
  ngOnInit() {
  }
  colors: any = [
    { id: 1, name: "dark", diaplayName: 'Dark'},
    { id: 2, name: "red", diaplayName: 'Red' },
    { id: 3, name: "dual", diaplayName: 'Dual' },
    { id: 4, name: "light", diaplayName: 'Light' },
  ];
  handleChange(e) {
    let newval = e.detail.value;
    this.defaultTheme = newval;
    if (newval == "dark") {
      document.body.setAttribute('color-theme', 'dark');
      this.renderer.removeClass(this.bg.nativeElement, 'bg2');
      this.renderer.removeClass(this.bg.nativeElement, 'bg1');
      this.renderer.addClass(this.bg.nativeElement, 'bg3');
      this.renderer.removeClass(this.bg.nativeElement, 'bg4');
    }
    else if (newval == "red") {
      document.body.setAttribute('color-theme', 'dual');
      this.renderer.addClass(this.bg.nativeElement, 'bg2');
      this.renderer.removeClass(this.bg.nativeElement, 'bg1');
      this.renderer.removeClass(this.bg.nativeElement, 'bg3');
      this.renderer.removeClass(this.bg.nativeElement, 'bg4');
    }
    else if (newval == "dual") {
      document.body.setAttribute('color-theme', 'badge');
      this.renderer.removeClass(this.bg.nativeElement, 'bg2');
      this.renderer.removeClass(this.bg.nativeElement, 'bg1');
      this.renderer.removeClass(this.bg.nativeElement, 'bg3');
      this.renderer.addClass(this.bg.nativeElement, 'bg4');
    }
    else if (newval == "light") {
      document.body.setAttribute('color-theme', 'light');

      this.renderer.removeClass(this.bg.nativeElement, 'bg2');
      this.renderer.addClass(this.bg.nativeElement, 'bg1');
      this.renderer.removeClass(this.bg.nativeElement, 'bg3');
      this.renderer.removeClass(this.bg.nativeElement, 'bg4');
    }
  }

  setDefault() {
    document.body.setAttribute('color-theme', 'light');
  }

  logout() {
    this.auth.logout();
  }
 
}
