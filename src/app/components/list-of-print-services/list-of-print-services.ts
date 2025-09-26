import { Component, OnInit, output } from '@angular/core';
import { Service, ServiceCategory, ServiceType } from '../../app';
import { RecipientList } from '../print-services/recipient-list/recipient-list';
import { ShippingAddress } from '../print-services/shipping-address/shipping-address';

@Component({
  selector: 'app-list-of-print-services',
  imports: [],
  templateUrl: './list-of-print-services.html',
  styleUrl: './list-of-print-services.css'
})
export class ListOfPrintServices implements OnInit {
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
      ],
      category: ServiceCategory.Standard
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
      ],
      category: ServiceCategory.Standard
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
      ],
      category: ServiceCategory.Standard
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
      ],
      category: ServiceCategory.Standard
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
      ],
      category: ServiceCategory.Standard
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
      ],
      category: ServiceCategory.Standard
    },
    {
      key: ServiceType.PriorityProcessing,
      name: 'Priority Processing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/box.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'PriorityProcessingOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'PriorityProcessingSettingsComponent'
        }
      ],
      category: ServiceCategory.Premium
    },
    {
      key: ServiceType.CertifiedMail,
      name: 'Certified Mail',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti delectus atque quos fuga officiis.',
      icon: 'assets/mail.svg',
      sideBarItems: [
        {
          name: 'Overview',
          lightIcon: 'assets/overview-w.svg',
          darkIcon: 'assets/overview.svg',
          component: 'CertifiedMailOverviewComponent'
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'CertifiedMailSettingsComponent'
        }
      ],
      category: ServiceCategory.Premium
    }
  ];

  editServiceEvent = output<Service>();

  premiumServices: Service[] = [];
  standardServices: Service[] = [];


  ngOnInit() {
    this.premiumServices = this.services.filter(s => s.category === ServiceCategory.Premium);
    this.standardServices = this.services.filter(s => s.category === ServiceCategory.Standard);
  }

  editService(service: Service) {
    this.editServiceEvent.emit(service);
  }
}
