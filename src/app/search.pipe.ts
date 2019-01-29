import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(articles: any, term: any): any {
    if(term === undefined) {
      return articles;
    }
    return articles.filter(function(articles){
      return articles.title.toLowerCase().includes(term.toLowerCase())
    })
  }

}
