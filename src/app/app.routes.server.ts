import { RenderMode, ServerRoute } from '@angular/ssr';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Routes } from '@angular/router';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

