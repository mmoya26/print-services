import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PrintServices } from '../../../services/print-services';
import { TimeAgoPipe } from '../../../pipes/time-ago.pipe';

interface RecipientListItem {
  id: string;
  name: string;
  dateUploaded: Date;
  numberOfRecipients: number;
  isActive: boolean;
}

@Component({
  selector: 'app-recipient-list',
  imports: [DecimalPipe, TimeAgoPipe],
  templateUrl: './recipient-list.html',
  styleUrl: './recipient-list.css'
})
export class RecipientList {
  printService = inject(PrintServices);

  recipientLists: RecipientListItem [] = [
      {
        id: '1',
        name: 'Q4 2024 Recipients',
        dateUploaded: new Date('2025-10-15'),
        numberOfRecipients: 1265,
        isActive: true
      },
      {
        id: '2',
        name: 'Q3 2024 Recipients',
        dateUploaded: new Date('2025-08-10'),
        numberOfRecipients: 856,
        isActive: false
      }
    ]

  ngOnInit() {
    this.sortByDateDesc();
  }


  removeFileNameExtension(fileName: string): string {
    return fileName.replace(/\.[^/.]+$/, '');
  }


  uploadFile(event: Event) {
    this.printService.currentSideBarItems$().forEach((sideBarItem) => {
      if (sideBarItem.name === 'Recipients') {
        const input = event.target as HTMLInputElement;

        if (!input.files || input.files.length === 0) {
          return;
        }
        
        let fileName = '';
        this.printService.toggleActiveSideBarItemProcessing({ ...sideBarItem });

        setTimeout(() => {
          this.printService.toggleActiveSideBarItemProcessing({ ...sideBarItem });
        }, 5000);

        const file = input.files[0];
        fileName = this.removeFileNameExtension(file.name);

        this.recipientLists.forEach(item => item.isActive = false);

        this.recipientLists.unshift({
          id: (this.recipientLists.length + 1).toString(),
          name: fileName,
          dateUploaded: new Date(),
          numberOfRecipients: Math.floor(Math.random() * 1000) + 500,
          isActive: true
        });

      }
    });
  }

  private sortByDateDesc(): void {
    this.recipientLists.sort((a, b) => b.dateUploaded.getTime() - a.dateUploaded.getTime());
  }
}
