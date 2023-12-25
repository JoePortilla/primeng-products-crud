import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  // From Parent to child
  @Input() displayAddModal: boolean = true;
  // From child to parent
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clicAdd: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService) {
  }

  productForm = this.fb.group({
    'title': ['',
      [Validators.required]],
    'price': [0,
      [Validators.required]],
    'description': [''],
    'category': ['',
      [Validators.required]],
    'image': ['',
      [Validators.required]]
  });

  get title() {
    return this.productForm.get('title') as FormControl;
  }

  get price() {
    return this.productForm.get('price') as FormControl;
  }

  get description() {
    return this.productForm.get('description') as FormControl;
  }

  get category() {
    return this.productForm.get('category') as FormControl;
  }

  get image() {
    return this.productForm.get('image') as FormControl;
  }

  closeModal() {
    this.productForm.reset();
    this.clickClose.emit(true);
  }

  addProduct() {
    // console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value).subscribe(
      response => {
        console.log(response);
        this.clicAdd.emit(response)
        this.closeModal();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product added'
        });
      }, error => {
        console.log('error');
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Product can\'t be added'
        })
      });

  }
}
