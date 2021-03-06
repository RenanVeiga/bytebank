import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

//components
import { AppComponent } from './app.component';
import { NovatransferenciaComponent } from './novatransferencia/novatransferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovatransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt' },{

    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
