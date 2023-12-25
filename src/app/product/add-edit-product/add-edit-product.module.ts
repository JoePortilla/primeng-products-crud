import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEditProductComponent} from './add-edit-product.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {SharedModule} from "primeng/api";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
  ],
  exports: [
    AddEditProductComponent
  ]
})
export class AddEditProductModule {
}
