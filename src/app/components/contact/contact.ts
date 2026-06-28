import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = '';
  email = '';
  message = '';

  constructor(private toastService: ToastService) {}

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  sendMessage() {
    let hasError = false;

    if (!this.name.trim()) {
      this.toastService.show('Please enter your name!', 'error');
      hasError = true;
    }

    if (!this.email.trim()) {
      this.toastService.show('Please enter your email!', 'error');
      hasError = true;
    } else if (!this.isValidEmail(this.email)) {
      this.toastService.show('Please enter a valid email address!', 'error');
      hasError = true;
    }

    if (!this.message.trim()) {
      this.toastService.show('Please enter a message!', 'error');
      hasError = true;
    }

    if (hasError) return;

    emailjs.send(
      'service_383umxm',
      'template_snzb29l',
      {
        name: this.name,
        email: this.email,
        message: this.message,
        title: 'Portfolio Contact'
      },
      'VX5kx8X7nLwDxdPuU'
    ).then(() => {
      this.toastService.show('Message sent successfully!');
      this.name = '';
      this.email = '';
      this.message = '';
    }).catch(() => {
      this.toastService.show('Failed to send message. Please try again.', 'error');
    });
  }
}