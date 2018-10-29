import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordsService } from './services/words-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { AlphabeticalRuleComponent } from './alphabetical-rule/alphabetical-rule.component';
import { CategoryRuleComponent } from './category-rule/category-rule.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DataTableComponent } from './data-table/data-table.component';

const routes : Routes = [
  { path: '', component : HomeComponent }, //http://localhost:4200
  { path: 'AB_rule', component : AlphabeticalRuleComponent }, //http://localhost:4200/AB_rule
  { path: 'Cat_rule', component : CategoryRuleComponent } //http://localhost:4200/Cat_rule
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AlphabeticalRuleComponent,
    CategoryRuleComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    WordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
