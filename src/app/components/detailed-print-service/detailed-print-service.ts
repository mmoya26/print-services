import { AfterViewInit, Component, computed, inject, input, OnInit, output, ViewChild, ViewContainerRef } from '@angular/core';
import { Service, SideBarItem } from '../../app';
import { PrintServices } from '../../services/print-services';

@Component({
  selector: 'app-detailed-print-service',
  imports: [],
  templateUrl: './detailed-print-service.html',
  styleUrl: './detailed-print-service.css'
})
export class DetailedPrintService implements OnInit, AfterViewInit {
  @ViewChild('dynamicContent', { read: ViewContainerRef, static: false })
  dynamicContent!: ViewContainerRef;

  printService = inject(PrintServices);

  service = input<Service | null>(null);

  sideBarItems = computed(() => this.printService.currentSideBarItems$());

  backToServicesEvent = output<void>();

  activeSideBarItem: SideBarItem | null = null;

  private isViewInitialized = false;
  private currentComponentRef: any = null;

  loadSidebarComponent(sidebarItem: SideBarItem) {
    if (!this.isViewInitialized || !this.dynamicContent) {
      return;
    }

    try {
      // Clean up previous component
      if (this.currentComponentRef) {
        this.currentComponentRef.destroy();
      }

      this.dynamicContent.clear();

      // Create the new component using the component class directly
      this.currentComponentRef = this.dynamicContent.createComponent(sidebarItem.component);

      console.log(`Successfully loaded: ${sidebarItem.name}`);

    } catch (error) {
      console.error('Error loading sidebar component:', error);
    }
  }

  // Might custom event listener to listen to changes from the child side bar items components

  ngOnInit(): void {
    // Change this later in case there is no sidebar items
    this.printService.setCurrentSideBarItems(this.service()?.sideBarItems || []);
    
    // Change this later in case there is no sidebar items
    this.activeSideBarItem = this.sideBarItems()?.[0]!;
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;

    // Load first sidebar item by default
    if (this.service()?.sideBarItems.length) {
      this.loadSidebarComponent(this.service()!.sideBarItems[0]);
    }
  }

  backToServices() {
    this.backToServicesEvent.emit();
  }

  selectSideBarItem(sItem: SideBarItem) {
    if (this.activeSideBarItem?.name === sItem.name) {
      return;
    }

    this.activeSideBarItem = sItem;
    
    this.loadSidebarComponent(sItem);
  }

  activateService() {
    // Change this later in case there is no service (null)
    this.printService.updateActiveServices(this.service()!.key)
    this.backToServices();
  }
  
  deactivateService() {
    this.printService.deactivateActiveService(this.service()?.key!)
    this.backToServices();
  }
}

