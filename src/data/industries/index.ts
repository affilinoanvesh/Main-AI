import { medicalPractice } from './medical-practice';
import { lawPractice } from './law-practice';
import { accounting } from './accounting';
import { smallRetail } from './small-retail';
import { cafe } from './cafe';
import { beautyWellness } from './beauty-wellness';
import { automotive } from './automotive';
import { realEstate } from './real-estate';
import { hospitality } from './hospitality';
import { healthcare } from './healthcare';
import { retail } from './retail';
import { education } from './education';
import { legal } from './legal';
import { financial } from './financial';
import { construction } from './construction';
import { manufacturing } from './manufacturing';
import { transportation } from './transportation';
import { logistics } from './logistics';
import { media } from './media';
import { entertainment } from './entertainment';
import { telecommunications } from './telecommunications';
import { environmental } from './environmental';
import { agriculture } from './agriculture';
import { biotech } from './biotech';
import { hr } from './hr';

import type { Industry, Challenge, Solution, Feature, Metric, Testimonial } from './types';

export const industries: Record<string, Industry> = {
  // Small Local Businesses First
  'medical-practice': medicalPractice,
  'law-practice': lawPractice,
  accounting,
  'small-retail': smallRetail,
  cafe,
  'beauty-wellness': beautyWellness,
  automotive,
  'real-estate': realEstate,
  hospitality,
  
  // Larger Industries
  healthcare,
  retail,
  education,
  legal,
  financial,
  construction,
  manufacturing,
  transportation,
  logistics,
  media,
  entertainment,
  telecommunications,
  environmental,
  agriculture,
  biotech,
  hr,
};

export type {
  Industry,
  Challenge,
  Solution,
  Feature,
  Metric,
  Testimonial,
};