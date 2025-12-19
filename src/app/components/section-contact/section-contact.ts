import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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

  // Clés EmailJS - Ces clés publiques peuvent être dans le code
  private readonly EMAIL_SERVICE_ID = 'service_lntm7p3';
  private readonly EMAIL_TEMPLATE_ID = 'template_9fkb5zk';
  private readonly EMAIL_PUBLIC_KEY = '_rDzWPK0Bl8z0bIPW';

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

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams,
        this.EMAIL_PUBLIC_KEY
      );

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
