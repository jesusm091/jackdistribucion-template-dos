import { Injectable } from '@angular/core';
import { ModalJackComponent } from '../components/modal-jack/modal-jack.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: ModalJackComponent[] = [];

  add(modal: ModalJackComponent) {
     
      if (!modal.id || this.modals.find(x => x.id === modal.id)) {
          throw new Error('modal must have a unique id attribute');
      }

    
      this.modals.push(modal);
  }

  remove(modal: ModalJackComponent) {
     
      this.modals = this.modals.filter(x => x === modal);
  }

  open(id: string) {
     
      const modal = this.modals.find(x => x.id === id);

      if (!modal) {
          throw new Error(`modal '${id}' not found`);
      }

      modal.open();
  }

  close() {
      
      const modal = this.modals.find(x => x.isOpen);
      modal?.close();
  }
}
