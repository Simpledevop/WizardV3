import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-data-wizard',
  templateUrl: './user-data-wizard.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-message,
        :host ::ng-deep img  {
            align-self: center;
            font-size: 16px;
            margin-left: .5em;
        }
    `]
})
export class UserDataWizardComponent implements OnInit {
  activeIndex: number = 0;
  firstName: string;
  lastName: string;
  address: string;

  msgs: Message[] = [];
  form_SetupDDMandate_Step: FormGroup;

  ngOnInit() {
    this.form_SetupDDMandate_Step = new FormGroup({
      accountHolderName: new FormControl('', Validators.required), 
      sortCodeDigits0to2: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      sortCodeDigits2to4: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      sortCodeDigits4to6: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      accountNumber: new FormControl()
    });
  }

  form_SetupDDMandate_Step_Submit() {
    console.log(this.form_SetupDDMandate_Step.value);
    if (this.form_SetupDDMandate_Step.invalid) {
      debugger;
      return;
    }
  }

  next() {
    this.activeIndex++;
  }

  ok() {
    this.activeIndex = 0;
  }

  onChange(label: string) {
    this.msgs.length = 0;
    this.msgs.push({ severity: 'info', summary: label });
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }
}
