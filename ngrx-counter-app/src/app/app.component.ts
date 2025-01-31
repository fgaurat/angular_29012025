import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, incBy, increment, reset } from './counter.actions';
import { CommonModule } from '@angular/common';
import { AppState } from './app.config';
import { CounterState } from './counter.reducer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-counter-app';
  count$: Observable<CounterState>;
  constructor(private store: Store<AppState>) {
    // this.count$ = store.select('count');
    this.count$ = store.select((state:AppState)=>state.count);
  }

  increment() {
    this.store.dispatch(increment());
  }
  incBy3(t:number) {
    this.store.dispatch(incBy({theValue:t}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
