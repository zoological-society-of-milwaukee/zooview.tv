import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faBars,
  faArrowLeft,
  faTrash,
  faPlus,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';


import './style.css';

// Build a Library to Reference Icons Throughout App
// Fonts included here are then available globally
// See: https://goo.gl/doUeQS
library.add(
  fab,
  // Note: You can import individual icons (subsetting).
  // Only these icons will be included in build.
  faCircle,
  faStar,
  faChevronLeft,
  faChevronRight,
  faBars,
  faArrowLeft,
  faTrash,
  faPlus,
  faPrint,
);
