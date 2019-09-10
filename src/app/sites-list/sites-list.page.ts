import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.page.html',
  styleUrls: ['./sites-list.page.scss'],
})
export class SitesListPage implements OnInit {

  sites: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.sites = [
      {
        img: "/assets/img/destinos-cerca-a-bogota.jpg",
        data: {
          title: "Título",
          subtitle: "Subtítulo",
          img: "/assets/img/destinos-cerca-a-bogota.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo expedita quos magni rerum totam, itaque velit ducimus excepturi impedit quas amet voluptas autem ipsa, obcaecati at molestiae placeat quae!"
        }
      },
      {
        img: "/assets/img/destinos-cerca-a-bogota.jpg",
        data: {
          title: "Título",
          subtitle: "Subtítulo",
          img: "/assets/img/destinos-cerca-a-bogota.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo expedita quos magni rerum totam, itaque velit ducimus excepturi impedit quas amet voluptas autem ipsa, obcaecati at molestiae placeat quae!"
        }
      },
      {
        img: "/assets/img/destinos-cerca-a-bogota.jpg",
        data: {
          title: "Título",
          subtitle: "Subtítulo",
          img: "/assets/img/destinos-cerca-a-bogota.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo expedita quos magni rerum totam, itaque velit ducimus excepturi impedit quas amet voluptas autem ipsa, obcaecati at molestiae placeat quae!"
        }
      },
      {
        img: "/assets/img/destinos-cerca-a-bogota.jpg",
        data: {
          title: "Título",
          subtitle: "Subtítulo",
          img: "/assets/img/destinos-cerca-a-bogota.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nemo expedita quos magni rerum totam, itaque velit ducimus excepturi impedit quas amet voluptas autem ipsa, obcaecati at molestiae placeat quae!"
        }
      }
    ]
  }

  async showModal(data: any) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        data: data
      }
    });
    await modal.present();
  }

}
