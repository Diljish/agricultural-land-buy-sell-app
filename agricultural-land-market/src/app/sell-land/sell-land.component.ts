import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sell-land',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sell-land.component.html',
  styleUrls: ['./sell-land.component.css']
})
export class SellLandComponent {
  formData = {
    firstName: '',
    lastName: '',
    address: '',
    landDetails: '',
    phone: '',
    landPhotos: [] as File[] // Store uploaded files in an array
  };

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Cast EventTarget to HTMLInputElement
    if (inputElement.files && inputElement.files.length > 0) {
      this.formData.landPhotos = Array.from(inputElement.files); // Convert FileList to array
    }
  }

  onSubmit() {
    console.log('Land listed for sale:', this.formData);
    alert('Your land listing has been submitted successfully!');
  }

}
