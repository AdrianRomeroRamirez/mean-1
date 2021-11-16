import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.productoForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  agregarProducto() {
    const PRODUCTO: Producto = {
      name: this.productoForm.get('product')?.value,
      category: this.productoForm.get('category')?.value,
      location: this.productoForm.get('location')?.value,
      price: this.productoForm.get('price')?.value,
    };

    this.toastr.success(
      'The product has been successfully registered!',
      'Product registered!'
    );

    this.router.navigate(['/']);
  }
}
