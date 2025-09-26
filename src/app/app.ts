import { Component, signal } from '@angular/core';
import { ListOfPrintServices } from './components/list-of-print-services/list-of-print-services';
import { DetailedPrintService } from './components/detailed-print-service/detailed-print-service';

export interface SideBarItem {
  name: string;
  lightIcon: string;
  darkIcon: string;
  component: any;
}

export interface Service {
  key: ServiceType;
  name: string;
  description: string;
  icon: string;
  sideBarItems: SideBarItem[];
}

export enum ServiceType {
  BulkShipping = 'BulkShipping',
  Inserts = 'Inserts',
  Householding = 'Householding',
  AlternateReturnAddress = 'AlternateReturnAddress',
  PrintExclusions = 'PrintExclusions', // For testing purposes only
  EnvelopeCustomization = 'EnvelopeCustomization' // For testing purposes only
}

@Component({
  selector: 'app-root',
  imports: [ListOfPrintServices, DetailedPrintService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  serviceOpened = false;
  
  selectedService = signal<Service | null>(null);

  editService(service: Service) {
    this.serviceOpened = true;
    this.selectedService.set(service);
  }
}
