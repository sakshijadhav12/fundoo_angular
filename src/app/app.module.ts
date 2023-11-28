import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistrationComponent } from './Component/resistration/resistration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule}from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteIconsComponent } from './note-icons/note-icons.component';
import { AddNoteComponent } from './Component/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './Component/trash/trash.component';


@NgModule({
  declarations: [
    AppComponent,
    ResistrationComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    NoteIconsComponent,
    AddNoteComponent,
    DisplayNotesComponent,
    GetAllNotesComponent,
    ArchiveComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    
    
  }
 }
