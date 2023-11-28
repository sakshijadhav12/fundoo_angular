import { Component , Input,Output ,OnInit, EventEmitter} from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent  {
  notes:any;

  constructor(private notedata :NotesService)
  {
    this.notedata.getAllNotes().subscribe((data) => {
     
      this.notes = data; 
      console.log(this.notes["data"]);

    });
    console.log(this.notes);
  }
}

  

