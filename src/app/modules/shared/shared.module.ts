import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    SiderComponent,
    PageHeaderComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [HeaderComponent, SiderComponent, PageHeaderComponent],
  providers: [],
  bootstrap: [SharedComponent],
})
export class SharedModule {}
