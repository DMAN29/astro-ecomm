import { Banner } from "@/types";

export const banners: Banner[] = [
  {
    id: "1",
    imageUrl: "https://placehold.co/1200x400/png",
    redirectUrl: "/promo-1",
    isActive: true,
  },
  {
    id: "2",
    imageUrl: "https://placehold.co/1200x400/png?text=Banner+2",
    redirectUrl: "/promo-2",
    isActive: true,
  },
  {
    id: "3",
    imageUrl: "https://placehold.co/1200x400/png?text=Banner+3",
    redirectUrl: "/promo-3",
    isActive: true,
  },
  {
    id: "4",
    imageUrl: "https://placehold.co/1200x400/png?text=Inactive+Banner",
    redirectUrl: "/promo-4",
    isActive: false,
  },
];
