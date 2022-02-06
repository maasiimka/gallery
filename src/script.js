import { galleryItems } from './js/list';
import { marcup } from './js/markup';
marcup(galleryItems, gallery);

import { gallery, modalButton, overlay } from './js/consts';

import { findTarget } from './js/delegation';

import { removePictureAtribute } from './js/removePictureAtribute';

import { closeModalWithEscape } from './js/closeModalWithEscape';

import { openNextOrPreviousImage } from './js/openNextOrPreviousImage';

gallery.addEventListener('click', findTarget);
modalButton.addEventListener('click', removePictureAtribute);
overlay.addEventListener('click', removePictureAtribute);
window.addEventListener('keydown', closeModalWithEscape);
window.addEventListener('keydown', openNextOrPreviousImage);
