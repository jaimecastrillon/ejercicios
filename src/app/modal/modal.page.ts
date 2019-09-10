import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() data: any;

  constructor(private modalCtrl: ModalController) {
    
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
