import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../../features/logistics/models/order.model';
import { API_CONFIG } from '../../config/constants/api.config';

@Injectable()
export class OrderService {
  private baseUrl = API_CONFIG.ENDPOINTS.ORDERS.BASE;

  constructor(private http: HttpClient) {}

  getOrders(skip?: number, limit?: number): Observable<Order[]> {
    let params = new HttpParams();
    if (skip !== undefined) params = params.set('skip', skip);
    if (limit !== undefined) params = params.set('limit', limit);
    return this.http.get<Order[]>(this.baseUrl, { params }).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  updateOrder(orderId: string, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/${orderId}`, order).pipe(
      catchError((error) => throwError(() => error))
    );
  }
} 