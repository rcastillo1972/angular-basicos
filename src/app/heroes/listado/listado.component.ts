import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

public heroes: string[] =['Spiderman','Ironman','Hulk','Thor'];
public heroeborrado: string ='';

DeleteHeroe(): void{
  this.heroeborrado = this.heroes.shift() || '';
}

}
