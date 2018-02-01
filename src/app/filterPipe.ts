import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(users: any[], query: string): any[] {
    const filteredUsers = [];
    users.forEach( (item) => {
      const fullName = item.name.first + ' ' + item.name.last;
      if (fullName.includes(query)) {
          filteredUsers.push(item);
      }
    });
    return filteredUsers;
  }
}


