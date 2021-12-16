import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { ShareModule } from './share/share.module';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    DasboardComponent,
    TicketComponent,
    UsuariosComponent,
  ],
  imports: [CommonModule, ShareModule,RouterModule],
  exports: [ShareModule, LoginComponent, PagesComponent, DasboardComponent, TicketComponent,UsuariosComponent],
})
export class PagesModule {}
