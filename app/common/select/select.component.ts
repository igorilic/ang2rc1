import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, Control, ControlGroup, FormBuilder } from '@angular/common';
import { IPartner } from '../partneri/partneri';
// import { PartneriService } from '../partneri/partneri.service';

@Component({
    selector: 'drop-list',
    templateUrl: 'app/common/select/select.component.html',
    directives: [FORM_DIRECTIVES]
})
export /**
 * SelectComponent
 */
class SelectComponent {
    @Input() izvorPodataka: IPartner[]; 
    @Input() ime: string;
    @Input() forma: FormBuilder;
    // @Output() podatakClicked: EventEmitter<string> =new EventEmitter<string>();
}