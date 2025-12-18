import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section-contact',
  imports: [FormsModule],
  templateUrl: './section-contact.html',
  styleUrl: './section-contact.css',
})
export class SectionContact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitError = '';

  // Clés EmailJS depuis les variables d'environnement
  private readonly EMAIL_SERVICE_ID = environment.emailjs.serviceId;
  private readonly EMAIL_TEMPLATE_ID = environment.emailjs.templateId;
  private readonly EMAIL_PUBLIC_KEY = environment.emailjs.publicKey;

  async onSubmit(form: any) {
    // Réinitialiser les messages
    this.submitMessage = '';
    this.submitError = '';

    // Vérifier que le formulaire est valide
    if (form.invalid) {
      this.submitError = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    // Vérifier que les champs ne sont pas vides
    if (!this.formData.name.trim() || !this.formData.message.trim()) {
      this.submitError = 'Le nom et le message ne peuvent pas être vides.';
      return;
    }

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.submitError = 'Veuillez entrer une adresse email valide.';
      return;
    }

    this.isSubmitting = true;

    try {
      // Préparer les paramètres pour EmailJS
      const templateParams = {
        name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message
      };

      console.log('Service ID:', this.EMAIL_SERVICE_ID);
      console.log('Template ID:', this.EMAIL_TEMPLATE_ID);
      console.log('Paramètres:', templateParams);

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams,
        this.EMAIL_PUBLIC_KEY
      );

      console.log('Email envoyé avec succès!', response);
      this.submitMessage = 'Message envoyé avec succès! Je vous répondrai bientôt.';
      
      // Réinitialiser le formulaire
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      form.resetForm();
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi:', error);
      console.error('Détails de l\'erreur:', error.text || error.message);
      this.submitError = `Une erreur est survenue: ${error.text || error.message || 'Veuillez réessayer plus tard.'}`;
    } finally {
      this.isSubmitting = false;
    }
  }
}
