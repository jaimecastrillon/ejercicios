import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sites: any;
  constructor() {
    
  }

  ngOnInit(): void {
    this.sites = [
      {
        title: "Represa del Sisga",
        subtitle: "Categoría uno",
        img: "/assets/img/destinos-cerca-a-bogota.jpg",
        description: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: "Cascada la Chorrera",
        subtitle: "Categoría dos",
        img: "/assets/img/la-chorrera-cascada.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat voluptatibus exercitationem adipisci? Vel sequi voluptatibus at mollitia nihil totam voluptas, sed earum laborum explicabo cum officiis voluptate? Provident, voluptates."
      },
      {
        title: "Laguna de tota",
        subtitle: "Categoría tres",
        img: "/assets/img/laguna-turismo.jpg",
        description: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean."
      },
      {
        title: "Parque Quinini",
        subtitle: "Categoría cuatro",
        img: "/assets/img/parque-quinini.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat voluptatibus exercitationem adipisci? Vel sequi voluptatibus at mollitia nihil totam voluptas, sed earum laborum explicabo cum officiis voluptate? Provident, voluptates."
      }
    ]
    
  }

}
