import { Pipe, PipeTransform } from '@angular/core';
import { PostsComponent } from '../components/posts/posts.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(value:any, arg: any): any {
    if(arg == '' || arg.length < 3) return value;
    const resultPosts = [];
  for(const post of  value) {
   if (post.producto.toLowerCase().indexOf(arg.toLowerCase()) > -1){
    resultPosts.push(post);
   };
  };
  return resultPosts;
 }

}
