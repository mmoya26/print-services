import { Injectable, signal, WritableSignal } from '@angular/core';
import { Service, ServiceCategory, ServiceType, SideBarItem } from '../app';
import { ShippingAddress } from '../components/print-services/shipping-address/shipping-address';
import { RecipientList } from '../components/print-services/recipient-list/recipient-list';

@Injectable({
  providedIn: 'root'
})
export class PrintServices {
  readonly services: Service[] = [
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
          component: RecipientList,
          processing: false
        },
        {
          name: 'Shipping Address',
          lightIcon: 'assets/map-pin-w.svg',
          darkIcon: 'assets/map-pin.svg',
          component: ShippingAddress,
          processing: false
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
          component: 'InsertsOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'InsertsSettingsComponent',
          processing: false
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
          component: 'HouseholdingOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'HouseholdingSettingsComponent',
          processing: false
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
          component: 'AlternateReturnAddressOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'AlternateReturnAddressSettingsComponent',
          processing: false
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
          component: 'PrintExclusionsOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'PrintExclusionsSettingsComponent',
          processing: false
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
          component: 'EnvelopeCustomizationOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'EnvelopeCustomizationSettingsComponent',
          processing: false
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
          component: 'PriorityProcessingOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'PriorityProcessingSettingsComponent',
          processing: false
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
          component: 'CertifiedMailOverviewComponent',
          processing: false
        },
        {
          name: 'Settings',
          lightIcon: 'assets/settings-w.svg',
          darkIcon: 'assets/settings.svg',
          component: 'CertifiedMailSettingsComponent',
          processing: false
        }
      ],
      category: ServiceCategory.Premium
    }
  ];

  private currentSideBarItems: WritableSignal<SideBarItem[]> = signal([]);
  public currentSideBarItems$ = this.currentSideBarItems.asReadonly();

  private activeServices: WritableSignal<ServiceType[]> = signal([]);
  public activeServices$ = this.activeServices.asReadonly();

  setCurrentSideBarItems(sItems: SideBarItem[]) {
    // This needs a map method to create unique references for each item
    // otherwise it would refence the services array items directly and make changes to the readonly array
    this.currentSideBarItems.set(sItems.map(item => ({ ...item, processing: false })));
  }

  updateActiveServices(serviceType: ServiceType) {
    // Prevent duplicates
    if (this.activeServices$().includes(serviceType)) {
      return;
    }

    this.activeServices.update(services => [...this.activeServices$(), serviceType]);
    console.log(this.activeServices());
  }

  deactiveteActiveService(serviceType: ServiceType) {
    this.activeServices.update(services => services.filter(s => s !== serviceType));
  }

  toggleActiveSideBarItemProcessing(sItem: SideBarItem) {
    this.currentSideBarItems().forEach(item => {

      if (item.name === sItem.name) {
        item.processing = !item.processing;
      }
    });
  }

  isServiceActive(service: Service): boolean {
    return this.activeServices()?.includes(service.key) || false;
  }

  clear() {
    this.currentSideBarItems.set([]);
    console.log(this.currentSideBarItems())
  }
}
