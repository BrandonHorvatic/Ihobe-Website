import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { SocialComponent } from './components/social/social.component';
import { ProductsRouteComponent } from './components/products-route/products-route.component';
import { ProfitScienceLiquidComponent } from './components/profit-science-liquid/profit-science-liquid.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },

    { path: 'dust-suppression-solutions',          component: ProductsRouteComponent },
    { path: 'profit-science-liquid',          component: ProfitScienceLiquidComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,
      anchorScrolling: 'disabled',
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
