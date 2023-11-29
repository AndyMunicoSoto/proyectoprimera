// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';
import { DataService } from './services/data-service.service';
import { DataComponent } from './components/data-component/data-component.component';


@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [BrowserModule, FormsModule], // Agregar FormsModule
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
