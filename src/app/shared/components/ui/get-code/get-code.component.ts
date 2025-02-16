import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { SendCodeService } from '@auth/services/send-code.service';
import { SharedModule } from '@shared/shared.module';
import { finalize, map, Observable, takeWhile, timer } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-get-code',
  imports: [SharedModule, SpinnerComponent],
  templateUrl: './get-code.component.html',
})
export class GetCodeComponent {
  constructor(private sendCodeService: SendCodeService) {}

  showInput: boolean = false;
  timer = signal<boolean>(false);
  loading = signal<boolean>(false);
  seconds?: Observable<number>;

  @Input() type!: string;
  @Input() value!: string;
  @Input() verified!: boolean;
  @Output() showInputChange = new EventEmitter<boolean>();
  @Output() error = new EventEmitter<string>();

  toggle() {
    this.timer.set(false);
    if (!this.value) return;

    this.loading.set(true);

    this.sendCodeService
      .sendCodeEmail(
        this.type == 'email' ? 'verify-email' : 'verify-code',
        this.value,
      )
      .subscribe({
        next: () => {
          this.showInput = !this.showInput;
          this.showInputChange.emit(this.showInput);
          this.error.emit('');
          this.startTimer();
          this.loading.set(false);
          this.timer.set(true);
        },
        error: (response: HttpErrorResponse) => {
          let errorMessage = response.error.message;
          if (response.status == 429) {
            errorMessage = 'AUTH.ERROR.limit';
          }

          this.timer.set(false);
          this.loading.set(false);
          this.error.emit(errorMessage);
        },
      });
  }

  startTimer() {
    this.timer.set(true);
    this.seconds = timer(0, 1000).pipe(
      map((n: number) => 60 - n),
      takeWhile((n) => n >= 0),
      finalize(() => {
        this.timer.set(false);
      }),
    );
  }
}
