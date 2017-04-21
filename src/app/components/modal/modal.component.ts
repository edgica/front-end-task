import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit, OnDestroy {
  show: boolean = false;
  @Input() title: string;
  @Input() bodyMsg: string = '';
  @Input() width: string;
  @Output('confirmClose') confirmClose = new EventEmitter<boolean>();
  private keyboardEventSub: any;

  constructor() {
    this.keyboardEventSub = Observable.fromEvent(document, 'keyup').subscribe(($event: KeyboardEvent) => {
      if (this.show && $event.keyCode == 27) {
        this.show = false;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.keyboardEventSub.unsubscribe();
  }

  open() {
    this.show = true;
  }
  openWithArgs(title, bodyMsg) {
    this.title = title;
    this.bodyMsg = bodyMsg;
    this.open();
  }
  close(confirm: boolean) {
    this.show = false;
    if (confirm == true) this.confirmClose.emit(true);
  }

}
