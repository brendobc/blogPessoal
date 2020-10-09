import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(mensagem: string, tipo: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.cor = tipo    
    bsModalRef.content.mensagem = mensagem    
  }

  showAlertDanger(mensagem: string) {
    this.showAlert(mensagem, 'danger')
  }

  showAlertInfo(mensagem: string) {
    this.showAlert(mensagem, 'info')
  }
  
  showAlertSuccess(mensagem: string) {
    this.showAlert(mensagem, 'success')
  }
}
