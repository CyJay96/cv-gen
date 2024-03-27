import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';

@NgModule({
  declarations: [SharedComponent, HeaderComponent, SiderComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [HeaderComponent, SiderComponent],
  providers: [],
  bootstrap: [SharedComponent],
})
export class SharedModule {}
