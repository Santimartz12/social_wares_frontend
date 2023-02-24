import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
    `
    div{
      max-width: 500px;
      max-height: 368px;
      width: 100%;  
      position: relative;
    }

    .background__image{
      z-index:1;
      width: 100%;
    }

    .banner_logo {
    position: absolute;
    z-index: 2;
    width: 70%;
    top: 33%;
    right: 50%;
    transform: translate(50%, 50%);
}

    `
  ]
})
export class BannerComponent {

}

// .contenedor {
//   position: relative;
//   width: 50%;
//   height: 50%;
// }

// .contenedor img:first-child {
//   z-index: 1;
// }

// .contenedor img:last-child {
//   z-index: 2;
//   position: absolute;
//   top: 50px;
//   left: 50px;
// }