import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { NewcardealsComponent } from './newcardeals/newcardeals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app/app-routing-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { VehiclepageComponent } from './vehiclepage/vehiclepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarbottomComponent } from './navbarbottom/navbarbottom.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NewcardealsComponent,
    SearchboxComponent,
    MainPageComponent,
    NavbarComponent,
    VehiclepageComponent,
    NavbarbottomComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    NgbModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
