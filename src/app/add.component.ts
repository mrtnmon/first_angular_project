import {Component} from '@angular/core';
import {AddService} from './add.service';

@Component({
  selector: 'adds',
  template: `
  <div class="table-responsive">
    <table class="table">
      <tr>
        <th *ngFor="let add of adds">
        {{add}}
        </th>
      </tr>
    </table>
  </div>
  `

})
export class AddComponent {
  adds;

  constructor(addService: AddService) {
    this.adds = addService.getAdds();
  }
}

