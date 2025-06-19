import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrderService } from '../../../../core/services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-orders-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss'],
  providers: [OrderService]
})
export class OrdersCreateComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService, private snackBar: MatSnackBar) {
    this.orderForm = this.fb.group({
      customer: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const order: Order = this.orderForm.value;
      this.orderService.createOrder(order).subscribe({
        next: () => {
          this.snackBar.open('Orden creada exitosamente', 'Cerrar', { duration: 3000 });
          this.orderForm.reset();
        },
        error: () => {
          this.snackBar.open('Error creando la orden', 'Cerrar', { duration: 4000 });
        }
      });
    }
  }
} 