import { bicycleAccidents } from "./bicycle-accidents";
import { busAccidents } from "./bus-accidents";
import { carAccidents } from "./car-accidents";
import { motorcycleAccidents } from "./motorcycle-accidents";
import { rideshareAccidents } from "./rideshare-accidents";
import { truckAccidents } from "./truck-accidents";
import type { PracticeArea } from "./types";
import { wrongfulDeath } from "./wrongful-death";

export const practiceAreas: PracticeArea[] = [
  carAccidents,
  truckAccidents,
  rideshareAccidents,
  busAccidents,
  bicycleAccidents,
  motorcycleAccidents,
  wrongfulDeath,
];

export const getPracticeArea = (slug: string) => practiceAreas.find((p) => p.slug === slug);
