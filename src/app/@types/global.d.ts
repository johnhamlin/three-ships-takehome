// Using global.d.ts because I'm not worried about cluttering the global namespace in such a small project.

// The type of the options in the select component
type SelectOptionType = MultiValue<{
  value: string;
  label: string;
}>;

// Type for the provider data returned from the API
interface Provider {
  _id: string;
  name: string;
  slug: string;
  phone: string;
  website: string;
  social_media: SocialMedia;
  address: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
  nearest_major_citystate: string;
  geolocation: BusinessGeolocation;
  categories: string[];
  services: string[];
  highlights: string[];
  lowlights: Record<string, string[]>; // Using Record type for dynamic property names
  certifications: Record<string, unknown>; // Empty object, assumed to potentially have dynamic keys
  awards: Record<string, unknown>; // Same as above
  third_party_ratings: ThirdPartyRatings;
  rating: Rating;
  google_places_id: GooglePlacesId;
  is_hidden: boolean;
  status: Status;
  last_updated: string; // Assuming ISO string for date, could also use Date type if directly converting
  review_score: number;
  review_count: number;
  distance: number;
}

// Interfaces for nested objects
interface SocialMedia {
  facebook?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
}

// Can't use 'Geolocation' because it's a built-in type
interface BusinessGeolocation {
  type: string;
  coordinates: [number, number];
}

interface ThirdPartyRatings {
  google_places?: GooglePlacesRating;
}

interface GooglePlacesRating {
  review_score: number;
  review_count: number;
}

interface Rating {
  th: number;
  toh: number;
}

interface GooglePlacesId {
  data_id: string;
  data_cid: string;
}

interface Status {
  is_hidden: boolean;
  reason: string;
}
