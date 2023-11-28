import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent 
{
  trashednotes: any;
    constructor(private notesService: NotesService) {
    this.notesService.gettrashNotes().subscribe((data: any) => {
     
           this.trashednotes = data; 
         console.log(this.trashednotes["data"]);
      
           });
  }

  
}

// // notes:any;

//   constructor(private notedata :NotesService)
//   {
//     this.notedata.getAllNotes().subscribe((data) => {
     
//       this.notes = data; 
//       console.log(this.notes["data"]);

//     });
//     console.log(this.notes);
//   }
// }
