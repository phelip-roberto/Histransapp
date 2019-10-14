import { OnInit, Component, Input } from '@angular/core';
import { Message } from '../../domain/message';
import { User } from '../../domain/user';
import { AlterUserService } from './../../services/alter-user.service';

@Component({
   selector: 'app-modal-pass',
   templateUrl: 'modal-pass.component.html',
})
export class ModalPassComponent implements OnInit {

   msgs: Message[] = [];
   loading = false;

   @Input()
   display: boolean;
   @Input()
   userInfo: User;

   constructor(private alterUserService: AlterUserService) {}

   ngOnInit() {}

   changePassword(recoverInfo) {
      this.loading = true;
      if (recoverInfo.newPass !== recoverInfo.confirmPass) {
         this.msgs.push({severity: 'error', summary: 'Recuperação de Senha',
           detail: 'Os campos referentes a senha não coincidem!'});
         this.loading = false;
      } else {
         this.alterUserService.alterPassword(this.userInfo, recoverInfo.newPass).subscribe(
            resp => {
               this.msgs.push({severity: 'success', summary: 'Recuperação de Senha',
                  detail: 'Sua nova senha foi salva no banco de dados!'});
               console.log(resp);
               this.display = false;
               this.loading = false;
            },
            error => {
               this.msgs.push({severity: 'error', summary: 'Recuperação de Senha',
                  detail: 'Os campos referentes a senha não coincidem!'});
               console.log(error);
               this.loading = false;
            }
         );
      }
   }
}

