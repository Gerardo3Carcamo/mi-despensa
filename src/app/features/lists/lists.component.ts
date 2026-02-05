import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { ListsService } from '../../core/services/lists.service';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CardModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {

  lists: any[] = [];
  constructor(private service: ListsService) {
    this.service.getLists().subscribe(r => this.lists = r);
  }

}
