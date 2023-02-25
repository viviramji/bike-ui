import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  models: String[] = [
    'model 1', 'model 2', 'model 3'
  ];
  bikeForm: FormGroup;
  validMessage: String = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      conact: new FormControl(),
    });
  }

  submitRegistration() {
    if (this.bikeForm.valid) {
      this.validMessage = "Your bike registration has been submitted. Thank you!";
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe({
        next: (data) => {
          this.bikeForm.reset();
          return true;
        },
        error: (e) => console.error(e),
      })
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
}
