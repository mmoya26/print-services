import { Component, inject, OnInit, output } from '@angular/core';
import { Service, ServiceCategory, ServiceType } from '../../app';
import { PrintServices } from '../../services/print-services';

@Component({
  selector: 'app-list-of-print-services',
  imports: [],
  templateUrl: './list-of-print-services.html',
  styleUrl: './list-of-print-services.css'
})
export class ListOfPrintServices implements OnInit {
  printService = inject(PrintServices);
  editServiceEvent = output<Service>();

  premiumServices: Service[] = [];
  standardServices: Service[] = [];

  ngOnInit() {
    this.premiumServices = this.printService.services.filter(s => s.category === ServiceCategory.Premium);
    this.standardServices = this.printService.services.filter(s => s.category === ServiceCategory.Standard);
  }

  editService(service: Service) {
    this.editServiceEvent.emit(service);
  }

  isServiceActive(service: Service): boolean {
    return this.printService.activeServices$().includes(service.key);
  }
}
