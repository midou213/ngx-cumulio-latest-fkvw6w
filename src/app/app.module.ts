import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxCumulioModule } from 'ngx-cumulio';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgChartsModule, NgxCumulioModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
