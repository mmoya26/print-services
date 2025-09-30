import { Component, inject } from '@angular/core';
import { PrintServices } from '../../../services/print-services';
import { ServiceType } from '../../../app';

@Component({
  selector: 'app-recipient-list',
  imports: [],
  templateUrl: './recipient-list.html',
  styleUrl: './recipient-list.css'
})
export class RecipientList {
  printService = inject(PrintServices);

  uploadFile() {
    this.printService.currentSideBarItems$().forEach((sideBarItem) => {
      if (sideBarItem.name === 'Recipients') {
        this.printService.toggleActiveSideBarItemProcessing({ ...sideBarItem });
      }
    });
  }
}
