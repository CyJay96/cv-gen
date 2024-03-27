import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [SharedComponent, HeaderComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [SharedComponent],
})
export class SharedModule {}
