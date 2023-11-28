import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  
    archivenotes: any;
      constructor(private notesService: NotesService) {
      this.notesService.getarchiveNotes().subscribe((data: any) => {
             this.archivenotes = data; 
           console.log(this.archivenotes["data"]);
        
             });

}
}
