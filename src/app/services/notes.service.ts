import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { HttpService } from '../../app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService { options: any;

  constructor(private httpService: HttpService) {
    this.options = {};
   }
  close(data: {}) {
    // const userToken = localStorage.getItem('token');
    // const header = new HttpHeaders().set('Authorization', `Bearer ${userToken}`)

    return this.httpService.postService('/Notes/add_note', data)
  };

  GetallNotes() {
    const notes =  this.httpService.getService('/Notes/displyNotes', this.options);
    return notes;
  }


}

