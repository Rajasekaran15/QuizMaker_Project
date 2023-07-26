import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropDown } from '../../interfaces/drop-down';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
   @Input() name!: string;
   @Input() options!: DropDown[];
   @Output() selectedValue = new EventEmitter<string>();
   selectedOption: string = '';
   onClick():void{
    this.selectedValue.emit(this.selectedOption);
   }
}
