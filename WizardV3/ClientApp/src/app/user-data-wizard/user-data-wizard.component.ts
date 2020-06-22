import { Component } from '@angular/core';
import { Message } from 'primeng/api';

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
export class UserDataWizardComponent {
  activeIndex: number = 0;
  firstName: string;
  lastName: string;
  address: string;

  msgs: Message[] = [];

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
