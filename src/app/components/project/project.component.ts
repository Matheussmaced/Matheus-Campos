import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,

  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() image: string = '';
  @Input() reverse: string = '';
  @Input() imgReverse: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies!: string[];
  @Input() link: string = '';
}
