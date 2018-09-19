import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgChatComponent } from './ng-chat.component';
import { EmojifyPipe } from './pipes/emojify.pipe';
import { LinkfyPipe } from './pipes/linkfy.pipe';
import { SmilesComponent } from './smiles/smiles.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgChatComponent, EmojifyPipe, LinkfyPipe, SmilesComponent],
  exports: [NgChatComponent]
})
export class NgChatModule {
}
