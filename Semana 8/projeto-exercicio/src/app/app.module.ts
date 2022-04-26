import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';

//importando o roteamento//
import { RouterModule } from '@angular/router';
import { BebidasListaComponent } from './components/bebidas-lista/bebidas-lista.component';
//////////////////////////
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    InformacoesComponent,
    BebidasListaComponent,
  ],
  imports: [
    BrowserModule,

    //importanto o routermodule - https://angular.io/guide/router-tutorial
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
