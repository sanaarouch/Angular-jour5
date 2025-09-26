import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ProductComponent } from './front/article/article.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { ProductService} from "./service/article-fictif.service";
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ProductComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent,
    MenuDashboardComponent,
    AjouterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AccueilComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'admin/product/liste', component: ListeComponent },
      { path: 'admin/product/ajouter', component: AjouterComponent },
      { path: 'admin', component: DashboardComponent },
      { path: '**', component: NotFoundComponent }
    ], { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }