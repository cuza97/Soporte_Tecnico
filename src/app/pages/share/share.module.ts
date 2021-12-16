import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcomsComponent } from './breadcoms/breadcoms.component';


@NgModule({
  declarations: [
    PagenotfoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcomsComponent,
  ],
  imports: [CommonModule],
  exports: [
    PagenotfoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcomsComponent,
  ],
})
export class ShareModule {}
