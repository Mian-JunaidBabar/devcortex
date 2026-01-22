export interface ContactFormData {
  name: string;
  email: string;
  budget: string;
  service: string;
  details: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface ActionResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
