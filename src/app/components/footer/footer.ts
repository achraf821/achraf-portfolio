import { Component } from '@angular/core';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(private toastService: ToastService) {}

  copyEmail() {
    navigator.clipboard.writeText('achraflaazizi14@gmail.com');
    this.toastService.show('Email copied to clipboard!');
  }
}