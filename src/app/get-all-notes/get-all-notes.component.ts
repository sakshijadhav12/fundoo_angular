import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent {
  allNotes!: any;
  constructor(private notesService: NotesService) {}

  receiveData(data: any) {
    this.allNotes = [...this.allNotes, data];
  }

  disaplayAllNotes() {
    this.notesService.getAllNotes().subscribe((response: any) => {
      this.allNotes = response?.data?.data.filter(
        (item: any) => item.isArchive === false && item.istrash === false
      );
      this.allNotes = [...this.allNotes];
    });
  }

  ngOnInit() {
    this.disaplayAllNotes();
  }
}


