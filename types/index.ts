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
