import { AfterViewInit, Component, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListOfPrintServices } from './components/list-of-print-services/list-of-print-services';
import { DetailedPrintService } from './components/detailed-print-service/detailed-print-service';

export interface SideBarItem {
  name: string;
  lightIcon: string;
  darkIcon: string;
  componentName: string;
}

export interface Service {
  name: string;
  description: string;
  icon: string;
  sideBarItems: SideBarItem[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListOfPrintServices, DetailedPrintService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('dynamicContent', { read: ViewContainerRef, static: false })
  dynamicContent!: ViewContainerRef;

  serviceOpened = false;
  
  selectedService = signal<Service | null>(null);

  editService(service: Service) {
    this.serviceOpened = true;
    this.selectedService.set(service);
  }
}
