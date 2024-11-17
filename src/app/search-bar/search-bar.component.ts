import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../auto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() autos: Auto[] = [];
  searchTerm: string = '';

  filteredAutos: Auto[] = [];

  searchAutoList() {
    this.filteredAutos = this.autos.filter(auto => auto.marque.toLowerCase() === this.searchTerm.toLowerCase());
  }
  @Output() selectAutoEvent = new EventEmitter<Auto>();

selectedAuto(auto: Auto) {
  this.selectAutoEvent.emit(auto);
}

}
