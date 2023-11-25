import { Component , Input,Output ,OnInit, EventEmitter} from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent  implements OnInit {
  @Input() notes: any;
  @Output() noteDetails: EventEmitter<any> = new EventEmitter();
  @Output() receiveHandleIconsClick = new EventEmitter();

  ngOnInit() {
    this.noteDetails.emit(this.notes);
  }

  receiveHandleIcons(data: any) {
    console.log('receiveHandleIconsData', data);
    this.receiveHandleIconsClick.emit(data.noteDetails);
  }
  // receiveHandleIcons($event: any) {
  
}

  

