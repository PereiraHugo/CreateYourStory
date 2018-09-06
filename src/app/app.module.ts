import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DonneesService } from './services/donnees.service';
import { FormsModule } from '@angular/Forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { AlphabeticalRuleComponent } from './alphabetical-rule/alphabetical-rule.component';
import { CategoryRuleComponent } from './category-rule/category-rule.component';

const routes : Routes = [
  { path: '', component : HomeComponent }, //http://localhost:4200
  { path: 'AB_rule', component : AlphabeticalRuleComponent }, //http://localhost:4200/AB_rule
  { path: 'Cat_rule', component : CategoryRuleComponent } //http://localhost:4200/Cat_rule
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainNavComponent,
    HomeComponent,
    AlphabeticalRuleComponent,
    CategoryRuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DonneesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
