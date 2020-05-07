import {Injectable} from '@angular/core';
import {Item} from './items/item';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Createitem} from './items/createitem';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsUrl = 'http://localhost:9000/items';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`)
      .pipe(
        catchError(this.handleError<Item[]>('searchItems', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  addItem(item: Createitem): Observable<Createitem> {
    return this.http.post<Createitem>(this.itemsUrl, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<Createitem>('addItem'))
      );
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url)
      .pipe(
        catchError(this.handleError<Item>(`getItem with id ${id}`))
      );
  }

  updateItem(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put(url, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateItem'))
      );
  }
}
