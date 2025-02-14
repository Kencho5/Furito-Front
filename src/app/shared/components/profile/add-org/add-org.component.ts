import { Location } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ComboboxItems } from '@core/modules/interfaces/comboboxItems';
import { CompressImageService } from '@core/services/compress-image.service';
import { ComboboxComponent } from '@shared/components/ui/combobox/combobox.component';
import { ErrorMessageComponent } from '@shared/components/ui/error-message/error-message.component';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { SharedModule } from '@shared/shared.module';
import { orgTypes } from '@utils/orgTypes';
import { phoneCodes } from '@utils/phoneCodes';

@Component({
  selector: 'app-add-org',
  imports: [
    SharedModule,
    FormsModule,
    InputComponent,
    ComboboxComponent,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: './add-org.component.html',
})
export class AddOrgComponent {
  constructor(
    public location: Location,
    private compressService: CompressImageService,
  ) {}
  @ViewChild('logoInput') logoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('logoImage') logoImage!: ElementRef<HTMLImageElement>;

  addForm = new FormGroup({
    logo: new FormControl('', [Validators.required]),
    org_code: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    org_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  orgTypes: ComboboxItems[] = orgTypes;
  phoneCodes: ComboboxItems[] = phoneCodes;

  submitted: boolean = false;
  formError = signal<string>('');
  hasLogo = signal<boolean>(false);

  onSubmit(event: Event): void {
    event.preventDefault();
    this.handleErrors();

    if (this.addForm.invalid) {
      this.submitted = true;
      return;
    }

    this.formError.set('');
  }

  handleErrors() {
    for (const control in this.addForm.controls) {
      if (this.addForm.get(control)?.errors) {
        this.formError.set(`AUTH.ERROR.FORM.${control}`);
        break;
      }
      this.formError.set('');
    }
  }

  onFilesChange() {
    const files = this.logoInput.nativeElement.files;

    if (files) {
      for (const file of files) {
        this.compressService
          .compressImage(file, 0.85)
          .then((compressedImage) => {
            this.addForm.controls.logo.setValue(compressedImage);
            this.logoImage.nativeElement.src = compressedImage;
            this.hasLogo.set(true);
          });
      }
    }
  }

  deleteLogo() {
    this.logoImage.nativeElement.src = '/icons/profile/upload-circle.svg';
    this.addForm.controls.logo.reset();
    this.logoInput.nativeElement.value = '';
    this.hasLogo.set(false);
  }
}
