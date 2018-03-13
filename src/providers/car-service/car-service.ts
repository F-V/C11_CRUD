import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarServiceProvider {
  
  constructor(private db:AngularFireDatabase) {
    console.log('Hello CarServiceProvider Provider');
  }

  getAll(){
      return this.db.list("car").valueChanges();
  }

  save(id:string,brand:string,make:string,color:string) {
    return this.db.object('car/'+id).set({ 
      id:id,
      brand:brand,
      make:make,
      color:color
     });
  }
  update(id:string,brand:string,make:string,color:string) {
    this.db.object('car/'+id).update({ 
      id:id,
      brand:brand,
      make:make,
      color:color
     });
  }
  delete(id:string) {
    this.db.object('car/'+id).remove();
  }
}
