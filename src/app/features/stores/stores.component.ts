import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { StoresService } from '../../core/services/stores.service';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss'
})
export class StoresComponent {

  stores: any[] = [];
  name = '';

  constructor(private service: StoresService) {
    this.load();
  }

  load() {
    this.service.getStores().subscribe(r => this.stores = r);
  }

  add() {
    this.service.createStore(this.name).subscribe(() => {
      this.name = '';
      this.load();
    });
  }

}
