import { AbstractControl } from '@angular/forms';

export function getFormError(
  control: AbstractControl | null
): string | null {
  if (!control || !control.errors || !control.touched) {
    return null;
  }

  if (control.errors['required']) {
    return 'This field is required';
  }

  if (control.errors['email']) {
    return 'Please enter a valid email address';
  }

  if (control.errors['minlength']) {
    return `Minimum ${control.errors['minlength'].requiredLength} characters required`;
  }

  if (control.errors['maxlength']) {
    return `Maximum ${control.errors['maxlength'].requiredLength} characters allowed`;
  }

  if (control.errors['pattern']) {
    return 'Invalid format';
  }

  return 'Invalid value';
}
