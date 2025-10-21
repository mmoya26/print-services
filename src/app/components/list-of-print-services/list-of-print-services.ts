import { Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { Service, ServiceCategory, ServiceType } from '../../app';
import { PrintServices } from '../../services/print-services';
import { RecipientList } from '../print-services/recipient-list/recipient-list';

@Component({
  selector: 'app-list-of-print-services',
  imports: [],
  templateUrl: './list-of-print-services.html',
  styleUrl: './list-of-print-services.css',
})
export class ListOfPrintServices implements OnInit {
  printService = inject(PrintServices);
  editServiceEvent = output<Service>();

  premiumServices = signal<Service[]>([]);
  standardServices = signal<Service[]>([]);

  activePremiumServicesCount = computed(() => {
    const length = this.premiumServices().filter((s) =>
      this.printService.activeServices$().find((ac) => ac === s.key),
    ).length;

    return length;
  });

  activeStandardServicesCount = computed(() => {
    const length = this.standardServices().filter((s) =>
      this.printService.activeServices$().find((ac) => ac === s.key),
    ).length;

    return length;
  });

  ngOnInit() {
    this.premiumServices.set(
      this.printService.services.filter((s) => s.category === ServiceCategory.Premium),
    );

    this.standardServices.set(
      this.printService.services.filter((s) => s.category === ServiceCategory.Standard),
    );
  }

  editService(service: Service) {
    this.editServiceEvent.emit(service);
  }

  isServiceActive(service: Service): boolean {
    return this.printService.activeServices$().includes(service.key);
  }
}
