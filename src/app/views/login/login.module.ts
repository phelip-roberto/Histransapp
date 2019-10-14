import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GrowlModule } from 'primeng/growl';
import { NgxLoadingModule } from 'ngx-loading';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MessageService } from './../../services/message.service';

@NgModule({
   declarations: [ LoginComponent ],
   imports: [
      CommonModule,
      LoginRoutingModule,
      GrowlModule,
      FormsModule,
      NgxLoadingModule,
      ReactiveFormsModule
   ],
   providers: [
      MessageService
   ]
})
export class LoginModule { }
