import { Component } from "@angular/core";

@Component({
  selector:'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  public nombre: string = 'Iroman';
  public edad: number = 45;

   get nombreCapitalizado():string{
     return this.nombre.toUpperCase();
  }

   GetName():string {
       return `${this.nombre } - ${this.edad}`;
   }

   changeName():void{
     this.nombre = 'Spiderman';

   }

   changeAge():void{
     this.edad = 30;
   }

}
