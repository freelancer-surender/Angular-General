import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MicroFrontendService } from './micro-frontend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('movieList', {read: ViewContainerRef, static: true}) listContainer!: ViewContainerRef;
  @ViewChild('ticketAvailability', {read: ViewContainerRef, static: true}) availabilityContainer!: ViewContainerRef;

  private listComponentRef: ComponentRef<any> | null = null;
  private availabilityComponentRef: ComponentRef<any> | null = null;

  constructor(private microfrontendService: MicroFrontendService) {}

  async ngOnInit() {
    try {
      const listModule = await this.microfrontendService.loadRemoteComponent(4201, 'movie-list');
      this.listContainer.clear();
      this.listComponentRef = this.listContainer.createComponent(listModule.AppComponent);
      this.listComponentRef.changeDetectorRef.detectChanges();

      const availabilityModule = await this.microfrontendService.loadRemoteComponent(4202, 'ticket-availability');
      this.availabilityContainer.clear();
      this.availabilityComponentRef = this.availabilityContainer.createComponent(availabilityModule.AppComponent);
      this.availabilityComponentRef.changeDetectorRef.detectChanges();
    } catch (err) {
      console.error("Failed to load remote component", err);
    }
  }

  ngOnDestroy(): void {
    if (this.listComponentRef) {
      this.listComponentRef.destroy();
    }
    if (this.availabilityComponentRef) {
      this.availabilityComponentRef.destroy();
    }
  }
}
