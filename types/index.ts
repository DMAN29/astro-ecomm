export interface Banner {
  id: string;
  imageUrl: string;
  redirectUrl: string;
  isActive?: boolean;
}

export interface SevaFeature {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
}

export interface AuthenticSevasContent {
  mainTitle: string;
  subtitle: string[];
  features: SevaFeature[];
}

export interface SevaCard {
  id: string;
  imageUrl: string;
  title: string;
  eventName: string;
  eventDate: string;
  location: string;
  bookingDeadline: string; // e.g., "Bookings closing in 20 days"
  description: string;
}

export interface SevasOfferedContent {
  title: string;
  cards: SevaCard[];
}
