export interface TodoItem {
  activity: string;
  price: number;
  type: ActivityType;
  bookingRequired: boolean;
  accessibility: number;
}

export enum ActivityType {
  EDUCATION = "education",
  RECREATIONAL = "recreational",
  SOCIAL = "social",
  DIY = "diy",
  CHARITY = "charity",
  COOKING = "cooking",
  RELAXATION = "relaxation",
  MUSIC = "music",
  BUSYWORK = "busywork"
}