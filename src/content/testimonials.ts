/**
 * Real client testimonials only. This list is intentionally empty.
 *
 * Do not invent quotes, names, star ratings or review counts. Add an entry
 * only when the firm supplies the quote and confirms it has the client's
 * permission to publish it. Entries appear automatically in the homepage
 * slider.
 *
 * Example:
 *   { quote: "…", name: "First name L.", context: "Car accident client", source: "Google" }
 */
export type Testimonial = {
  quote: string;
  name: string;
  context?: string;
  source?: string;
};

export const testimonials: Testimonial[] = [];
