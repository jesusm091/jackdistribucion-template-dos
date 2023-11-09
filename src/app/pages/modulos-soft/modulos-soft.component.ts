import { Component } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modulos-soft',
  templateUrl: './modulos-soft.component.html',
  styleUrls: ['./modulos-soft.component.scss']
})
export class ModulosSoftComponent {
  bodyText = '';

  constructor(protected modalService: ModalService) { }
  openModal(){
    console.log("open modal")
    this.modalService.open('modal-1');
  }
  openModaladmin(){
    console.log("open modal 2")
    this.modalService.open('modal-2');
  }
}
