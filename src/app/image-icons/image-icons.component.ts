import { Component, OnInit } from '@angular/core';
import { ImageIcons } from '../imageIcons.model';

@Component({
  selector: 'app-image-icons',
  templateUrl: './image-icons.component.html',
  styleUrls: ['./image-icons.component.css']
})
export class ImageIconsComponent implements OnInit {

  imageIcons: ImageIcons[] = [
    new ImageIcons('Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'Click here to start >', "./assets/img1.svg"),
    new ImageIcons('Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'Get Started >', "./assets/img2.svg"),
    new ImageIcons('Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'Get Started now >', "./assets/img3.svg"),
    new ImageIcons('Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'Read more >', "./assets/img4.svg")
  ];


  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
