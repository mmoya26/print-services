import { Component, input, OnInit, output } from '@angular/core';
import { Service, SideBarItem } from '../../app';

@Component({
  selector: 'app-detailed-print-service',
  imports: [],
  templateUrl: './detailed-print-service.html',
  styleUrl: './detailed-print-service.css'
})
export class DetailedPrintService implements OnInit{
  service = input<Service | null>(null);

  activeSideBarItem: SideBarItem | null = null;
  
  backToServicesEvent = output<void>();
  
  ngOnInit(): void {
    this.activeSideBarItem = this.service()?.sideBarItems[0] || null;
  }

  backToServices() {
    this.backToServicesEvent.emit();
  }

  selectSideBarItem(sItem: SideBarItem) {
    this.activeSideBarItem = sItem;
  }
}

