import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor(){}
filterPost = '';
 post = [
  {
    'id': 1,
    'producto': 'Computadora Portatil',
    'imagen': './assets/hp.jpg',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '30%'
  },
  {
    'id': 2,
    'producto': 'Moto Semiautomatica',
    'imagen': './assets/italika.jpg',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 3,
    'producto': 'Computadora Portatil',
    'imagen': './assets/huawei.png',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 4,
    'producto': 'Camisa Rayas',
    'imagen': './assets/camisa.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 5,
    'producto': 'Pantalon',
    'imagen': './assets/pantalon.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '15%'
  },
  {
    'id': 6,
    'producto': 'Moto 110',
    'imagen': './assets/negroI.jpg',
    'precio': '$20,000',
    'marca' : 'Italica',
    'descuento': '10%'
  }
  

 ]
 ngOnInit() {
 
}
public page!: number;
}
