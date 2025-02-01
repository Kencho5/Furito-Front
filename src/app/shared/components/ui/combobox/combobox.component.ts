import { Component, Input, signal, computed } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComboboxItems } from '@core/modules/interfaces/comboboxItems';
import { OutsideClickDirective } from '@core/directives/outside-click.directive';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-combobox',
  imports: [SharedModule, FormsModule, OutsideClickDirective],
  templateUrl: './combobox.component.html',
})
export class ComboboxComponent {
  constructor(private translate: TranslateService) {}

  @Input() selectedValue?: string;
  @Input() placeholder?: string;
  @Input() searchPlaceholder!: string;
  @Input() notFoundText!: string;
  @Input() error?: boolean;
  @Input() items!: ComboboxItems[];

  opened = signal<boolean>(false);
  searchValue = signal<string>('');
  filteredItems = computed(() =>
    this.items.filter((item) =>
      this.translate
        .instant(item.label)
        .toLowerCase()
        .includes(this.searchValue().toLowerCase()),
    ),
  );

  selectItem(value: string) {
    this.selectedValue = value;
    this.opened.set(false);
  }

  clearSearch() {
    this.searchValue.set('');
  }

  get itemLabel(): string {
    return (
      this.items.find((item) => item.value === this.selectedValue)?.label || ''
    );
  }
}
