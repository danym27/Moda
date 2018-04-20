import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  private ruta_foto;

  constructor () {
    this.ruta_foto = './assets/foto_perfil_git.png';
  }

  public cambio_imagen($event) {
    if ($event.target.id === 'yellow') {
      this.ruta_foto = './assets/foto_perfil_git_2.png';
    }
    if ($event.target.id === 'black') {
      this.ruta_foto = './assets/foto_perfil_git.png';
    }
  }
}
