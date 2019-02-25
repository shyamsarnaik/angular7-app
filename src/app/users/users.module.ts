import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UiMaterialModules } from '../ui-material';
import { AlbumDialogComponent } from './album-dialog/album-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
];

const components = [
  UsersComponent,
  AlbumDialogComponent
];

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  UiMaterialModules
];

@NgModule({
  declarations: components,
  entryComponents: components,
  imports: [modules, RouterModule.forChild(routes)],
  exports: [components]
})
export class UsersModule { }
