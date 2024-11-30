import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-new-cues',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './item-new-cues.component.html',
  styleUrls: ['./item-new-cues.component.css'],
})
export class ItemNewCuesComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Input() url!: string;
  @Input() category!: string;
}
