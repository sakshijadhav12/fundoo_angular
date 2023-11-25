import { Component, EventEmitter, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  isSecondCardOpen: boolean = false;
  selectedColor: string = '';
  title: string = '';         
  description: string = '';   
  //closeCard: any;
  
  @Output() newData: EventEmitter<any> = new EventEmitter<any>();
  constructor(private notesService: NotesService) {
    
  }
  openSecondCard() {
    this.isSecondCardOpen = true;
  }

  

  closeSecondCard= () => {
    let currentDateTime = new Date();
    const note = {
      title: this.title,
      note: this.description,
      color: '',
      isPin: false,
      isArchive: false,
      isTrash:false,
      reminder: currentDateTime,
      createat: currentDateTime,
      updateat: currentDateTime,

    };
    this.isSecondCardOpen = !this.isSecondCardOpen;

    if (this.title && this.description) {
      const res = this.notesService
        .close(note)
        .subscribe((response: any) => {
          console.log(response.status.details);
          this.newData.emit(response.status.details);
          console.log(response.status.details);
        });
    }
  };
}


