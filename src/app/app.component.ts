import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
// import { Auto } from './auto';
import { CommonModule } from '@angular/common';

export interface Auto {
  marque: string;
  modele: string;
  prix: number;
  puissance: number;
  photo: string;
  stock: number;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent,SearchBarComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div>
      <img src="assets/photos/image.png" alt="Image">
    </div>
  `,
})
export class AppComponent {
 
  autoList: Auto[]=[
    {
      marque: "Audi",
      modele: "A3",
      prix: 163,
      puissance: 6,
      photo: "/assets/photos/a3.png",
      stock:11
    },
    {
      marque: "Land Rover",
      modele: "Range Rover Evoque",
      prix: 290,
      puissance: 8,
      photo: "assets/photos/evoque.png",
      stock  :4
    },
    {
      marque: "Mercedes Benz",
      modele: "GLA",
      prix: 220,
      puissance: 8,
      photo: "assets/photos/gla.png",
      stock  :9
    },
    {
      marque: "Alfa Romeo",
      modele: "Stelvio",
      prix: 340,
      puissance: 18,
      photo: "assets/photos/stelvio.png",
      stock  :11
    },
    {
      marque: "BMW",
      modele: "x2",
      prix: 210,
      puissance: 8,
      photo: "assets/photos/two.jpg",
      stock :3
    },
    {
      marque: "BMW",
      modele: "x3",
      prix: 360,
      puissance: 11,
      photo: "assets/photos/x3.jpg",
      stock  :6
    }  
  ]

  selectedAuto: Auto | null = null;

  updateAuto(auto: Auto) {
    this.selectedAuto = auto;
  }
}
