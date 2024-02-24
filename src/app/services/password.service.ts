import { Injectable,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  userInputControl: FormControl = new FormControl();
  inputChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
}
