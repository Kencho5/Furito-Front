import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComboboxItems } from '@core/modules/interfaces/comboboxItems';
import { ComboboxComponent } from '@shared/components/ui/combobox/combobox.component';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { SharedModule } from '@shared/shared.module';
import { orgTypes } from '@utils/orgTypes';
import { phoneCodes } from '@utils/phoneCodes';

@Component({
  selector: 'app-add-org',
  imports: [SharedModule, InputComponent, ComboboxComponent],
  templateUrl: './add-org.component.html',
})
export class AddOrgComponent {
  constructor(public location: Location) {}

  addForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  orgTypes: ComboboxItems[] = orgTypes;
  phoneCodes: ComboboxItems[] = phoneCodes;
}
