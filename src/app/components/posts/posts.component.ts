import { Component, OnInit } from '@angular/core';

  // Resto del código

export interface filterfilterPost {
  id: number;
  producto: string;
  category: string;
  price: number;
  marca:string;
  descuento:string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title='angular-dropdownlist';
  dropdownListFilterType:String='EndWitch';
[x: string]: any;
 public dataFields:Object={groupBy:'Category'};
  constructor(){}
  
filterPost = '';
  private _selectedCategory!: string;
  public get selectedCategory(): string {
    return this._selectedCategory;
  }
  public set selectedCategory(value: string) {
    this._selectedCategory = value;
  }
  
 post = [
  {
    
    'id': 1,
    'producto': 'Computadora Portatil',
    'category': 'Category 1',
    'imagen': './assets/hp.jpg',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '30%'
  },
  {
    'id': 2,
    'producto': 'Moto Semiautomatica',
    'category':'Category 2',
    'imagen': './assets/italika.jpg',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 3,
    'producto': 'Computadora Portatil',
    'category':'Category 1',
    'imagen': './assets/huawei.png',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 4,
    'producto': 'Camisa Rayas',
    'category':'Category 3',
    'imagen': './assets/camisa.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 5,
    'producto': 'Pantalon',
    'category':'Category 3',
    'imagen': './assets/pantalon.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '15%'
  },
  {
    'id': 6,
    'producto': 'Moto 110',
    'category':'Category 2',
    'imagen': './assets/negroI.jpg',
    'precio': '$20,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 7,
    'producto': 'Computadora Portatil',
    'category':'Category 1',
    'imagen': './assets/hp.jpg',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '30%'
  },
  {
    'id': 8,
    'producto': 'Moto Semiautomatica',
    'category':'Category 2',
    'imagen': './assets/italika.jpg',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 9,
    'producto': 'Computadora Portatil',
    'category':'Category 1',
    'imagen': './assets/huawei.png',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 10,
    'producto': 'Camisa Rayas',
    'category':'Category 3',
    'imagen': './assets/camisa.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 11,
    'producto': 'Pantalon',
    'category':'Category 3',
    'imagen': './assets/pantalon.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '15%'
  },
  {
    'id': 12,
    'producto': 'Moto 110',
    'category':'Category 2',
    'imagen': './assets/negroI.jpg',
    'precio': '$20,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 13,
    'producto': 'Computadora Portatil',
    'category':'Category 1',
    'imagen': './assets/hp.jpg',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '30%'
  },
  {
    'id': 14,
    'producto': 'Moto Semiautomatica',
    'category':'Category 2',
    'imagen': './assets/italika.jpg',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 15,
    'producto': 'Computadora Portatil',
    'category':'Category 1',
    'imagen': './assets/huawei.png',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 16,
    'producto': 'Camisa Rayas',
    'category':'Category 3',
    'imagen': './assets/camisa.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 17,
    'producto': 'Pantalon',
    'category':'Category 3',
    'imagen': './assets/pantalon.jpg',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '15%'
  },
  {
    'id': 18,
    'producto': 'Moto 110',
    'category':'Category 2',
    'imagen': './assets/negroI.jpg',
    'precio': '$20,000',
    'marca' : 'Italica',
    'descuento': '10%'
  }


 ]
 getCategories(): string[] {
  return [...new Set(this.post.map(post=> post.category))];
}
get filteredProducts(): any[] {
  if (!this.selectedCategory) {
    return this.post;
  }
  return this.post.filter(post => post.category === this.selectedCategory);
}
 ngOnInit() {
 
}
public page!: number;
}
