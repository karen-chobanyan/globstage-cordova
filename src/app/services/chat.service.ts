import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class ChatService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle(user) {

    this.change.emit(user);
  }

}
