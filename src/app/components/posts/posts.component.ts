import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
[x: string]: any;
 
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
  },
  {
    'id': 7,
    'producto': 'Computadora Portatil',
    'imagen': './assets/hp.jpg',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '30%'
  },
  {
    'id': 8,
    'producto': 'Moto Semiautomatica',
    'imagen': './assets/italika.jpg',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 9,
    'producto': 'Computadora Portatil',
    'imagen': './assets/huawei.png',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 10,
    'producto': 'Camisa Rayas',
    'imagen': './assets/camisa.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 11,
    'producto': 'Pantalon',
    'imagen': './assets/pantalon.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '15%'
  },
  {
    'id': 12,
    'producto': 'Moto 110',
    'imagen': './assets/negroI.jpg',
    'precio': '$20,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 13,
    'producto': 'Computadora Portatil',
    'imagen': './assets/hp.jpg',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '30%'
  },
  {
    'id': 14,
    'producto': 'Moto Semiautomatica',
    'imagen': './assets/italika.jpg',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 15,
    'producto': 'Computadora Portatil',
    'imagen': './assets/huawei.png',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 16,
    'producto': 'Camisa Rayas',
    'imagen': './assets/camisa.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 17,
    'producto': 'Pantalon',
    'imagen': './assets/pantalon.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '15%'
  },
  {
    'id': 18,
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
