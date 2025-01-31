import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, StoreConfig } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './todo/todo.reducer';
import { Todos } from './models/todo';
import { TodoEffectService } from './todo/todo-effect.service';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideAnimationsAsync(),
     provideStore({todoList:todoReducer}),
     provideStoreDevtools({ maxAge: 25,logOnly: !isDevMode() }),
     provideEffects(TodoEffectService),
     provideHttpClient()
    ]
};
