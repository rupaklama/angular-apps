import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  // note: new instance of UniqueUsername is created and passed to the constructor of the component. This is how Angular's Dependency Injection (DI) system works. When an instance of this component is created, Angular will automatically provide an instance of UniqueUsername (or use an existing one if it's already been created), and pass it to the constructor.
  constructor(private uniqueUsername: UniqueUsername) {}

  authForm = new FormGroup({
    //@ts-ignore
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ],
      // note: The async validator is passed as the third argument to the FormControl constructor. This is how you can add an async validator to a form control.
      [this.uniqueUsername.validate]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });
}
