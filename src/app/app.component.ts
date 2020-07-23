import { Component } from '@angular/core';
// import { FavoriteChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   // post = {
//   //   title: 'Title',
//   //   isFavorite: true
//   // };
//   //  onFavoriteChanged(eventArgs: { FavoriteChangedEventArgs }) {
//   //   console.log('Favorite changed', eventArgs);
//   // }
// }
export class AppComponent {
  // courses = [1, 2, 3];
  // doWeHaveAnyCourses() {
  //  return  this.courses.length > 0;
  // }
  // noCourses() {
  //   return this.courses.length === 0;
  // }
  gender = ['male', 'female'];
  // Using switch case method
  viewMode = 'map';
  ageMode = 'none';
  names;
  onAdd() {
    this.names.push({id: 5, name: 'Kinyua'});
  }
  onChange(people) {
    people.name = 'UPDATED';
  }
  onRemove(people) {
    let index = this.names.indexOf(people);
    this.names.splice(index, 1);
  }
  loadNames() {
      this.names = [
        { id: 1 , name: 'John'},
        { id: 2 , name: 'Mary'},
        { id: 3 , name: 'Williams'},
        { id: 4 , name: 'Wilson'},
      ];
  }
  trackBy(index, name) {
   return name ? name.id : undefined;
  }
  canSave = false;
  // =====================Safe Traversal Operator===============================
  task = {
    title: 'Review application',
    assignee: {
      name: null
    }
  };
}
