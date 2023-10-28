import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../class/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private baseURL="http://localhost:8088/api/themes/theme"
  constructor(private httpClient:HttpClient) {}
    
  getThemesList():Observable<Theme[]>{
      return this.httpClient.get<Theme[]>(`${this.baseURL}/get`);
    }


    createTheme(theme:Theme):Observable<Object>{
      return this.httpClient.post(`${this.baseURL}/post`,theme)
    }

    getThemeById(id:number):Observable<Theme>{
      return this.httpClient.get<Theme>(`${this.baseURL}/get/${id}`);
    }

    updateTheme(id: number, theme: Theme): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/update/${id}`, theme);
    }
  deleteTheme(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}