import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ProfileEditPage } from '../profile-edit/profile-edit.page';


const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'profile-edit',
    component: ProfileEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfilePage,
    ProfileEditPage
  ]
})
export class ProfilePageModule {}
