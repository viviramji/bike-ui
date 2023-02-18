import { Component } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // * Attributes
  public bikes: any; // * 

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      { 
        next: (data) => { this.bikes = data },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }
}
