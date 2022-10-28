 
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
 

  defaultTheme="light";
  dark:boolean;
  light:boolean;
  gradient:boolean;
  yellow:boolean;
  @ViewChild('bg', { static: false }) bg: ElementRef;
 


  constructor(private renderer:Renderer2) {
   this.setDefault()
  }
  colors:any = [
    {id:1,name:"dark"},
    {id:2,name:"red"},
    {id:3,name:"dual"},
    {id:4,name:"light"},
  ];
  handleChange(e){
    let newval = e.detail.value
    console.log("changed",newval)
    if(newval == "dark"){
      document.body.setAttribute('color-theme','dark'); 
      this.renderer.removeClass(this.bg.nativeElement, 'bg2');
      this.renderer.removeClass(this.bg.nativeElement, 'bg1');
      this.renderer.addClass(this.bg.nativeElement, 'bg3');
      this.renderer.removeClass(this.bg.nativeElement, 'bg4');
    }
    else if(newval == "red"){
      document.body.setAttribute('color-theme','dual');
      this.renderer.addClass(this.bg.nativeElement, 'bg2');
      this.renderer.removeClass(this.bg.nativeElement, 'bg1');
      this.renderer.removeClass(this.bg.nativeElement, 'bg3');
      this.renderer.removeClass(this.bg.nativeElement, 'bg4');
    }
    else if(newval == "dual"){
      document.body.setAttribute('color-theme','badge');
      this.renderer.removeClass(this.bg.nativeElement, 'bg2');
      this.renderer.removeClass(this.bg.nativeElement, 'bg1');
      this.renderer.removeClass(this.bg.nativeElement, 'bg3');
      this.renderer.addClass(this.bg.nativeElement, 'bg4');
    }
    else if(newval == "light"){
      document.body.setAttribute('color-theme','light');

      this.renderer.removeClass(this.bg.nativeElement, 'bg2');
      this.renderer.addClass(this.bg.nativeElement, 'bg1');
      this.renderer.removeClass(this.bg.nativeElement, 'bg3');
      this.renderer.removeClass(this.bg.nativeElement, 'bg4');
    }
  }

  setDefault(){
    document.body.setAttribute('color-theme','light');
  }
}
