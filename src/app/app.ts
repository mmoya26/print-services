import { Component, inject, signal } from '@angular/core';
import { ListOfPrintServices } from './components/list-of-print-services/list-of-print-services';
import { DetailedPrintService } from './components/detailed-print-service/detailed-print-service';
import { PrintServices } from './services/print-services';

export interface SideBarItem {
  name: string;
  lightIcon: string;
  darkIcon: string;
  component: any;
  processing: boolean;
}

export interface Service {
  key: ServiceType;
  name: string;
  description: string;
  icon: string;
  sideBarItems: SideBarItem[];
  category: ServiceCategory;
}

// ServiceType and ServiceCategory enums can be refactored into one interface if needed
export enum ServiceType {
  BulkShipping = 'BulkShipping',
  Inserts = 'Inserts',
  Householding = 'Householding',
  AlternateReturnAddress = 'AlternateReturnAddress',
  PrintExclusions = 'PrintExclusions', // For testing purposes only
  EnvelopeCustomization = 'EnvelopeCustomization', // For testing purposes only
  PriorityProcessing = 'PriorityProcessing', // For testing purposes only
  CertifiedMail = 'CertifiedMail' // For testing purposes only
}

export enum ServiceCategory {
  Standard = 'Standard',
  Premium = 'Premium'
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

  printService = inject(PrintServices);

  editService(service: Service) {
    if (this.doesServiceContainSideBarItems(service)) {
      this.serviceOpened = true;
      this.selectedService.set(service);
      return;
    }

    if (this.printService.isServiceActive(service)) {
      this.printService.deactivateActiveService(service.key);
      return;
    }

    this.printService.updateActiveServices(service.key);
  }


  // TODO: Might not need this function at all
  resetService() {
    this.serviceOpened = false;
    this.selectedService.set(null);
    this.printService.clear();
  }

  doesServiceContainSideBarItems(s: Service): boolean {
    return s.sideBarItems.length > 0;
  }
}
