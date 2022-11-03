import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./onboarding-one/onboarding-one.module').then( m => m.OnboardingOnePageModule)
  } ,
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'onboarding-one',
    loadChildren: () => import('./onboarding-one/onboarding-one.module').then( m => m.OnboardingOnePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'one-page',
    loadChildren: () => import('./one-page/one-page.module').then( m => m.OnePagePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'chat-info',
    loadChildren: () => import('./chat-info/chat-info.module').then( m => m.ChatInfoPageModule)
  },
  {
    path: 'all-rateing',
    loadChildren: () => import('./all-rateing/all-rateing.module').then( m => m.AllRateingPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
