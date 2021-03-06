import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SocialComponent } from './social/social.component';
import { ProductsComponent } from './products/products.component';
import { ProductsRouteComponent } from './products-route/products-route.component';
import { ProfitScienceLiquidComponent } from './profit-science-liquid/profit-science-liquid.component';
import { TributeComponent } from './tribute/tribute.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        HttpClientModule,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        AboutUsComponent,
        FaqsComponent,
        SocialComponent,
        ProductsComponent,
        ProductsRouteComponent,
        ProfitScienceLiquidComponent,
        TributeComponent,
        HomeComponent,
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
