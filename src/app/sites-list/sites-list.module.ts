import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SitesListPage } from './sites-list.page';
import { ModalPageModule } from '../modal/modal.module';
import { ModalPage } from '../modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: SitesListPage
  }
];

@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SitesListPage]
})
export class SitesListPageModule {}
