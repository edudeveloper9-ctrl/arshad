/**
 * Portfolio utility functions for data transformation, WhatsApp link generation,
 * contact form validation and project filtering.
 */

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  honeypot?: string; // spam protection
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function formatWhatsAppUrl(phoneNumber: string, message?: string): string {
  // Strip all non-digits
  const digits = phoneNumber.replace(/\D/g, "");
  // Ensure country code 91 if starting with 10 digit Indian number
  const formatted = digits.length === 10 ? `91${digits}` : digits;
  const baseUrl = `https://wa.me/${formatted}`;
  if (message && message.trim()) {
    return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
  }
  return baseUrl;
}

export function getInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "MA";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function validateContactSubmission(input: ContactFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot spam test: bots fill this hidden field
  if (input.honeypot && input.honeypot.trim().length > 0) {
    errors.honeypot = "Spam bot detected";
    return { isValid: false, errors };
  }

  const trimmedName = (input.name || "").trim();
  if (!trimmedName) {
    errors.name = "Your name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const trimmedEmail = (input.email || "").trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = "Your email address is required.";
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (input.phone) {
    const trimmedPhone = input.phone.trim();
    // Allow standard international or 10-digit Indian numbers
    const cleanPhone = trimmedPhone.replace(/[\s\-\+\(\)]/g, "");
    if (cleanPhone.length > 0 && (cleanPhone.length < 8 || cleanPhone.length > 15)) {
      errors.phone = "Please enter a valid phone number (8-15 digits).";
    }
  }

  const trimmedMessage = (input.message || "").trim();
  if (!trimmedMessage) {
    errors.message = "A message or project brief is required.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters so I can understand your project.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function filterProjectsList<T extends { categories: string[] }>(
  items: T[],
  selectedCategory: string
): T[] {
  if (!selectedCategory || selectedCategory === "All") {
    return items;
  }
  return items.filter((item) => item.categories.includes(selectedCategory));
}
