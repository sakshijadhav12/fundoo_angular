import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResistrationComponent } from './Component/resistration/resistration.component';
import { HeaderComponent } from './header/header.component';
import { NoteIconsComponent } from './note-icons/note-icons.component';
import { AddNoteComponent } from './Component/add-note/add-note.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: ResistrationComponent,
  },
  {
    path: 'dashboard',
    component:HeaderComponent,
  },
  {
    path: 'noteicon',
    component: NoteIconsComponent,
  },
  {
    path: 'addnote',
    component: AddNoteComponent,
  },
  // {
  //   path:'displaynote',
  //   component: DisplayNotesComponent
  // },
  {
    path:'display_note',
    component: DisplayNotesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
