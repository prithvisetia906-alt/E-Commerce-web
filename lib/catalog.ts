export type Category = { slug: string; name: string; description: string; icon: string };
export type Product = {
  slug: string; name: string; brand: string; category: string; price: number; compareAt?: number;
  rating: number; reviews: number; badge?: string; description: string; colors: string[]; stock: number; image: string;
};

export const categories: Category[] = [
  { slug: "audio", name: "Audio", description: "Immersive sound, tuned for your day.", icon: "◒" },
  { slug: "smartphones", name: "Smartphones", description: "Powerful ideas in the palm of your hand.", icon: "▣" },
  { slug: "laptops", name: "Laptops", description: "Quietly capable machines for big thinking.", icon: "▱" },
  { slug: "wearables", name: "Wearables", description: "A little more awareness, every day.", icon: "◉" },
  { slug: "gaming", name: "Gaming", description: "Play without compromise.", icon: "✦" },
  { slug: "accessories", name: "Accessories", description: "Small upgrades, considered details.", icon: "⌁" },
];

const art = (bg: string, fg: string, kind: string) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><rect width="800" height="800" rx="48" fill="${bg}"/><circle cx="640" cy="140" r="160" fill="${fg}" opacity=".16"/><circle cx="120" cy="710" r="220" fill="${fg}" opacity=".09"/><text x="400" y="430" text-anchor="middle" font-family="Arial" font-size="180" font-weight="700" fill="${fg}" opacity=".88">${kind}</text><path d="M120 610h560" stroke="${fg}" opacity=".24" stroke-width="3"/></svg>`)}`;

export const products: Product[] = [
  { slug: "aero-pro-headphones", name: "Aero Pro Headphones", brand: "NOVA Audio", category: "audio", price: 14999, compareAt: 17999, rating: 4.8, reviews: 128, badge: "Bestseller", description: "Adaptive noise cancellation, spatial audio, and a 40-hour battery in a considered, featherlight frame.", colors: ["Graphite", "Cloud"], stock: 24, image: art("#e9eef2", "#315e81", "A") },
  { slug: "pulse-anc-earbuds", name: "Pulse ANC Earbuds", brand: "NOVA Audio", category: "audio", price: 8999, rating: 4.7, reviews: 96, badge: "New", description: "Pocket-sized quiet with a warm, detailed soundstage and intuitive touch controls.", colors: ["Obsidian", "Mist"], stock: 41, image: art("#eef1ec", "#237a52", "P") },
  { slug: "orbit-x-smartphone", name: "Orbit X Smartphone", brand: "NOVA Mobile", category: "smartphones", price: 64999, compareAt: 69999, rating: 4.9, reviews: 74, badge: "New", description: "A calm, capable flagship with a precision camera system and all-day performance.", colors: ["Midnight", "Silver"], stock: 12, image: art("#edf0f5", "#17191c", "O") },
  { slug: "orbit-lite-smartphone", name: "Orbit Lite Smartphone", brand: "NOVA Mobile", category: "smartphones", price: 32999, rating: 4.6, reviews: 52, description: "The essentials, refined. Bright display, reliable camera, and effortless battery life.", colors: ["Sage", "Ink"], stock: 29, image: art("#e7ede8", "#315e81", "L") },
  { slug: "halo-14-laptop", name: "Halo 14 Laptop", brand: "NOVA Computing", category: "laptops", price: 89999, compareAt: 94999, rating: 4.8, reviews: 88, badge: "Featured", description: "A silent, focused workspace with a vivid display and performance that stays out of your way.", colors: ["Space", "Natural"], stock: 8, image: art("#eee9e2", "#8a5d36", "H") },
  { slug: "halo-air-laptop", name: "Halo Air Laptop", brand: "NOVA Computing", category: "laptops", price: 69999, rating: 4.7, reviews: 61, description: "Lightweight by design, ready for the everyday work that matters.", colors: ["Silver"], stock: 16, image: art("#e8edf0", "#686d75", "H") },
  { slug: "arc-watch-series-2", name: "Arc Watch Series 2", brand: "NOVA Wear", category: "wearables", price: 24999, compareAt: 27999, rating: 4.6, reviews: 43, badge: "Offer", description: "Thoughtful health insights and gentle nudges, wrapped in a timeless silhouette.", colors: ["Black", "Stone"], stock: 18, image: art("#eeeae5", "#9b6647", "W") },
  { slug: "atlas-gamepad", name: "Atlas Wireless Gamepad", brand: "NOVA Play", category: "gaming", price: 5999, rating: 4.5, reviews: 39, description: "Responsive controls and a comfortable grip for long sessions and quick matches.", colors: ["Black", "Blue"], stock: 55, image: art("#e9e8ee", "#634d87", "G") },
  { slug: "dock-one-usb-c", name: "Dock One USB-C Hub", brand: "NOVA Works", category: "accessories", price: 4499, rating: 4.4, reviews: 27, description: "One clean connection for your complete desk setup.", colors: ["Graphite"], stock: 62, image: art("#edf0ee", "#466c57", "D") },
];

export const formatINR = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
