import { galleryItems } from "./list";
import { findCurrentElementIndex } from "./findCurrentElementIndex";
import { openPreviousImage } from './openPreviousImage';
import { openNextImage } from './openNextImage';

export const openNextOrPreviousImage = event => {

    const currentElementIndex = findCurrentElementIndex();
      
    if(event.key === "ArrowLeft" && currentElementIndex > 0){
      openPreviousImage(currentElementIndex);
    }
    
    else if(event.key === "ArrowRight" && currentElementIndex < galleryItems.length - 1) {
      openNextImage(currentElementIndex);
    }
  }