import { Component, Input, signal, computed } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FormsModule } from '@angular/forms';
import { ComboboxItems } from '../../../../core/modules/interfaces/comboboxItems';
import { OutsideClickDirective } from '../../../../core/directives/outside-click.directive';

@Component({
  selector: 'app-combobox',
  imports: [SharedModule, FormsModule, OutsideClickDirective],
  templateUrl: './combobox.component.html',
})
export class ComboboxComponent {
  @Input() selectedValue?: string;
  @Input() placeholder?: string;
  @Input() searchPlaceholder!: string;
  @Input() notFoundText!: string;
  @Input() error?: boolean;
  @Input() items!: ComboboxItems[];

  opened = signal(false);
  searchValue = signal('');
  filteredItems = computed(() =>
    this.items.filter((item) =>
      item.label.toLowerCase().includes(this.searchValue().toLowerCase()),
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
