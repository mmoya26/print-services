import { Component, output } from '@angular/core';
import { Service, ServiceType } from '../../app';
import { RecipientList } from '../print-services/recipient-list/recipient-list';
import { ShippingAddress } from '../print-services/shipping-address/shipping-address';

@Component({
  selector: 'app-list-of-print-services',
  imports: [],
  templateUrl: './list-of-print-services.html',
  styleUrl: './list-of-print-services.css'
})
export class ListOfPrintServices {
  protected readonly services: Service[] = [
    {
      key: ServiceType.BulkShipping,
      name: 'Bulk Shipping',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/truck.svg',
      sideBarItems: [
        {
          name: 'Recipients',
          lightIcon: 'assets/users-w.svg',
          darkIcon: 'assets/users.svg',
          component: RecipientList
        },
        {
          name: 'Shipping Address',
          lightIcon: 'assets/map-pin-w.svg',
          darkIcon: 'assets/map-pin.svg',
          component: ShippingAddress
        }
      ]
    },
    {
      key: ServiceType.Inserts,
      name: 'Inserts',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/file-text.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'InsertsOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'InsertsSettingsComponent'
        }
      ]
    },
    {
      key: ServiceType.Householding,
      name: 'Householding',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/home.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'HouseholdingOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'HouseholdingSettingsComponent'
        }
      ]
    },
    {
      key: ServiceType.AlternateReturnAddress,
      name: 'Alternate Return Address',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/map-pin.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'AlternateReturnAddressOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'AlternateReturnAddressSettingsComponent'
        }
      ]
    },
    {
      key: ServiceType.PrintExclusions,
      name: 'Print Exclusions',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/gear.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'PrintExclusionsOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'PrintExclusionsSettingsComponent'
        }
      ]
    },
    {
      key: ServiceType.EnvelopeCustomization,
      name: 'Envelope Customization',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/mail.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'EnvelopeCustomizationOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'EnvelopeCustomizationSettingsComponent'
        }
      ]
    },
  ];

  editServiceEvent = output<Service>();

  editService(service: Service) {
    this.editServiceEvent.emit(service);
  }
}
