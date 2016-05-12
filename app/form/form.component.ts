import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators, AbstractControl } from '@angular/common';
import { PartneriService } from '../common/partneri/partneri.service';
import { SelectComponent } from '../common/select/select.component';
import { IPartner } from '../common/partneri/partneri';

@Component({
    selector: 'test-form',
    templateUrl: 'app/form/form.component.html',
    directives: [FORM_DIRECTIVES, SelectComponent],
    styleUrls: ['app/form/form.component.css']
})
export class FormComponent implements OnInit {
    
    testForm: ControlGroup;
    partneri: IPartner[];
    errorMessage: string;
    ime: string = 'Partneri'
    
    constructor(private _partneriService: PartneriService, formBuilder: FormBuilder) {
        this._partneriService.getPartneri()
            .subscribe(
                partneri => this.partneri = partneri,
                error => this.errorMessage = <any>error
            );
        
        this.testForm = formBuilder.group({
            'sku': ['', Validators.minLength(3)],
            'partneriSel': ['', Validators.required]
        });
        
    }
    
    ngOnInit(): void {
        this._partneriService.getPartneri()
            .subscribe(
                partneri => this.partneri = partneri,
                error => this.errorMessage = <any>error
            );
    }
    onSubmit(form: any) : void {
        console.log('value = ', form);
    }
}