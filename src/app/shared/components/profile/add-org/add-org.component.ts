import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SendCodeService } from '@auth/services/send-code.service';
import { ComboboxItems } from '@core/modules/interfaces/comboboxItems';
import {
  AddOrgFields,
  AddOrgResponse,
} from '@core/modules/interfaces/organizations';
import { AddOrgService } from '@core/services/add-org.service';
import { CompressImageService } from '@core/services/compress-image.service';
import { ComboboxComponent } from '@shared/components/ui/combobox/combobox.component';
import { ErrorMessageComponent } from '@shared/components/ui/error-message/error-message.component';
import { GetCodeComponent } from '@shared/components/ui/get-code/get-code.component';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { SpinnerComponent } from '@shared/components/ui/spinner/spinner.component';
import { SharedModule } from '@shared/shared.module';
import { orgTypes } from '@utils/orgTypes';
import { phoneCodes } from '@utils/phoneCodes';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-add-org',
  imports: [
    SharedModule,
    FormsModule,
    InputComponent,
    ComboboxComponent,
    ReactiveFormsModule,
    ErrorMessageComponent,
    GetCodeComponent,
    SpinnerComponent,
  ],
  templateUrl: './add-org.component.html',
})
export class AddOrgComponent {
  constructor(
    public location: Location,
    private compressService: CompressImageService,
    private sendCodeService: SendCodeService,
    private addOrgService: AddOrgService,
  ) {}
  @ViewChild('logoInput') logoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('logoImage') logoImage!: ElementRef<HTMLImageElement>;

  addForm = new FormGroup({
    logo: new FormControl<Blob | null>(null, [Validators.required]),
    org_code: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    org_type: new FormControl('llc', [Validators.required]),
    org_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    email_code: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    phone_code: new FormControl('995', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  orgTypes: ComboboxItems[] = orgTypes;
  phoneCodes: ComboboxItems[] = phoneCodes;

  submitted: boolean = false;
  showInput: boolean = false;
  loading = signal<boolean>(false);
  formError = signal<string>('');
  codeError = signal<string>('');
  hasLogo = signal<boolean>(false);
  emailVerified: boolean = false;
  fileName: string = 'ORGS.FORM.add';

  onSubmit(event: Event): void {
    event.preventDefault();
    this.handleErrors();

    if (this.addForm.invalid) {
      this.submitted = true;
      return;
    }

    this.formError.set('');
    this.loading.set(true);

    const { logo, email_code, ...formData } = this.addForm.value;
    this.addOrganization(formData as AddOrgFields, logo!);
  }

  private addOrganization(formData: AddOrgFields, logo: Blob): void {
    this.addOrgService
      .addOrg(formData)
      .pipe(
        finalize(() => {
          this.submitted = true;
        }),
      )
      .subscribe({
        next: (response: AddOrgResponse) =>
          this.uploadLogo(response.presigned_url, logo),
        error: (response: HttpErrorResponse) => {
          this.loading.set(false);
          this.formError.set(response.error.message || 'AUTH.ERROR.unforseen');
        },
      });
  }

  private uploadLogo(presignedUrl: string, logo: Blob): void {
    this.addOrgService.putLogo(presignedUrl, logo).subscribe({
      next: () => {
        this.loading.set(false);
        this.formError.set('');
      },
      error: () => {
        this.loading.set(false);
        this.formError.set('AUTH.ERROR.unforseen');
      },
    });
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
    if (!files || files[0].size > 50 * 1024 * 1024) return;
    this.fileName = files[0].name;

    this.compressService
      .compressImage(files![0], 0.65)
      .then((compressedImage) => {
        this.addForm.controls.logo.setValue(compressedImage);
        this.logoImage.nativeElement.src = URL.createObjectURL(compressedImage);
        this.hasLogo.set(true);
      });
  }

  deleteLogo() {
    this.logoImage.nativeElement.src = '/icons/profile/upload-circle.svg';
    this.addForm.controls.logo.reset();
    this.logoInput.nativeElement.value = '';
    this.hasLogo.set(false);
    this.fileName = 'ORGS.FORM.add';
  }

  verifyEmailCode() {
    const form = this.addForm.controls;

    this.sendCodeService
      .verifyEmailCode(form.email.value!, form.email_code.value!)
      ?.subscribe({
        next: () => {
          this.codeError.set('');
          this.addForm.controls.email_code.disable();
          this.emailVerified = true;
        },
        error: (response: HttpErrorResponse) => {
          this.codeError.set(response.error.message);
        },
      });
  }
}
