import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { OddsComponent } from './odds/odds.component';
import { ScoresComponent } from './scores/scores.component';


const routes: Routes = [
  { path: 'odds', component: OddsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '**', component: ScoresComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
