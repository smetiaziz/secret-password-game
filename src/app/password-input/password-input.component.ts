import { Component ,Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordService } from '../services/password.service';
@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {

  constructor(public passwordService: PasswordService) {
    this.passwordService.userInputControl.valueChanges.subscribe(value => {
      this.passwordService.inputChanged.emit(value);
      console.log(value); 
    });
  }

}
