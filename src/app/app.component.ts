import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PISisRecomendacao';
}

const api = axios.create({
  baseURL: environment.api_url
})

function app(){
  api.get('/usuarios').then((response)=> {
    console.log(response.data)
  })
}
