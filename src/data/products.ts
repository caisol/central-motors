import type { Product } from "./types";
import { productAssets } from "./assets";

/**
 * Current vehicle lineup (2026).
 */
type Seed = Omit<Product, "startPrice" | "images" | "blur" | "brochure">;

const seed: Seed[] = [
  {
    slug: "apex-sedan", name: "Apex Sedan", category: "automobiles", tag: "Sedan", featured: true, order: 1,
    desc: "The Apex Sedan is an executive saloon offering refined aerodynamics, spacious cabin luxury, intuitive digital cockpit and responsive performance. Standard with six airbags, ESP, hill-hold control, push-start and dual-zone climate control.",
    features: ["1.5L Dual VVT Engine", "CVT Automatic with Sport Mode", "8-inch Touchscreen Infotainment", "Dual-Zone Climate Control", "Six Airbags", "Push Start System", "Hill Hold Control", "Smart Keyless Entry"],
    variants: [{ name: "Executive 1.5 MT", price: 5490000 }, { name: "Prestige 1.5 CVT", price: 5890000 }],
  },
  {
    slug: "vanguard-suv", name: "Vanguard SUV", category: "automobiles", tag: "SUV", featured: true, order: 2,
    desc: "The Vanguard SUV delivers commanding presence with a spacious 7-seater cabin, intelligent all-wheel-drive capability and panoramic glass roof. Engineered with 360-degree cameras, adaptive cruise control, leather ventilated seats and power tailgate.",
    features: ["2.0L Turbocharged Engine", "Intelligent AWD System", "Panoramic Sunroof", "360-degree Surround Camera", "Adaptive Cruise Control", "Eight Airbags", "Ventilated Leather Seats", "Power Tailgate"],
    variants: [{ name: "Elegance 2.0 AWD", price: 7250000 }, { name: "Signature 2.0 AWD", price: 7850000 }],
  },
  {
    slug: "volt-ev", name: "Volt EV", category: "automobiles", tag: "Electric", featured: true, order: 3,
    desc: "The Volt EV is an all-electric compact crossover offering zero-emission performance, instantaneous electric torque, up to 420 km of driving range, and rapid DC fast charging capability.",
    features: ["Zero Emission All-Electric Drive", "Up to 420 km Range", "Fast DC Rapid Charging", "Dual 10.25-inch Digital Displays", "Regenerative Braking", "Autonomous Emergency Braking", "Lane Keep Assist", "Keyless Mobile Connect"],
    variants: [{ name: "Standard Range 50kWh", price: 6800000 }, { name: "Extended Range 65kWh", price: 7400000 }],
  },
  {
    slug: "wagon-r", name: "Wagon-R", category: "automobiles", tag: "Hatchback", featured: false, order: 8,
    desc: "The Wagon-R is a spacious tall-boy city hatchback renowned for exceptional interior room, high roofline, low fuel consumption and effortless city maneuverability.",
    features: ["Power Steering", "Air Conditioning", "Anti-Lock Braking (ABS)", "Power Windows", "Keyless Entry", "Central Locking"],
    variants: [{ name: "VXR", price: 3214000 }, { name: "VXL", price: 3412000 }, { name: "AGS", price: 3741000 }],
  },
  {
    slug: "swift", name: "Swift", category: "automobiles", tag: "Hatchback", featured: true, order: 2,
    desc: "The current-generation Swift is a sporty, premium hatchback offered in GLMT, GLVT and GLVVT variants. It features six airbags, ABS with EBD, hill-hold control, push-start and smart keyless entry.",
    features: ["Power Steering", "Air Conditioning", "Alloy Wheels", "Smart Keyless Entry", "ABS with EBD", "Six Airbags", "Hill Hold Control", "Push Start System"],
    variants: [{ name: "GLMT", price: 4460160 }, { name: "GLVT", price: 4605600 }, { name: "GLVVT", price: 4766190 }],
  },
  {
    slug: "fronx", name: "Fronx", category: "automobiles", tag: "SUV", featured: true, order: 1,
    desc: "The Fronx redefines presence with a confident front design, sleek coupe-like proportions and a meticulously crafted interior, bridging functionality with sophistication. Offered in GL MT, GL AT and GLX 6AT (Mono-Tone & Two-Tone) variants with cruise control, wireless charging and a reversing camera.",
    features: ["Power Steering", "Air Conditioning", "Push Start", "Cruise Control", "Reversing Camera", "Wireless Charger", "Rear AC Vents", "Android Auto / Apple CarPlay", "Alloy Wheels", "Airbags", "EBD", "Hill Hold Control", "Keyless Entry", "Parking Sensors"],
    variants: [{ name: "GL MT", price: 5999999 }, { name: "GL AT", price: 6099999 }, { name: "GLX 6AT (Mono-Tone)", price: 6299999 }, { name: "GLX 6AT (Two-Tone)", price: 6374999 }],
  },
  {
    slug: "cultus", name: "Cultus", category: "automobiles", tag: "Hatchback", featured: true, order: 3,
    desc: "The Cultus is a practical, fuel-efficient hatchback offered in VXR, VXL and AGS variants, featuring alloy wheels, remote central locking, ABS and dual airbags.",
    features: ["Power Steering", "Air Conditioning", "Alloy Wheels", "Remote Central Lock", "ABS", "Dual Airbags"],
    variants: [{ name: "VXR", price: 4089490 }, { name: "VXL", price: 4359160 }, { name: "AGS", price: 4591460 }],
  },
  {
    slug: "alto", name: "Alto", category: "automobiles", tag: "Hatchback", featured: true, order: 4,
    desc: "The Alto is a compact, economical city hatchback offered in VXR, VXL and AGS variants, with power steering, air conditioning, ABS, airbags and power windows.",
    features: ["Power Steering", "Air Conditioning", "Air Bags", "Power Windows", "ABS"],
    variants: [{ name: "VXR", price: 2994861 }, { name: "VXL", price: 3166480 }, { name: "AGS", price: 3326446 }],
  },
  {
    slug: "every", name: "Every", category: "automobiles", tag: "Van", featured: true, order: 5,
    desc: "The Every is a versatile compact van built for families and businesses, with air conditioning, power windows, keyless entry, EBD, central locking and a rear wiper.",
    features: ["Power Steering", "Air Conditioning", "Air Bags", "Power Windows", "EBD", "Central Locking", "MP3 Player", "Keyless Entry", "Security Alarm", "Rear Wiper"],
    variants: [{ name: "VXR", price: 2965200 }],
  },
];

export const products: Product[] = seed.map((p) => ({
  ...p,
  startPrice: Math.min(...p.variants.map((v) => v.price)),
  images: productAssets[p.slug]?.images ?? [],
  blur: productAssets[p.slug]?.blur ?? [],
  brochure: productAssets[p.slug]?.brochure ?? null,
}));
