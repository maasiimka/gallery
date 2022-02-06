import { bigImage } from "./consts";
import { galleryItems } from "./list";
import { openNextImage, openPreviousImage } from "./modalActions";


export const openNextOrPreviousImage = event => {

    const currentElementIndex = findCurrentElementIndex();
      
    if(event.key === "ArrowLeft" && currentElementIndex > 0){
      openPreviousImage(currentElementIndex);
    }
    
    else if(event.key === "ArrowRight" && currentElementIndex < galleryItems.length - 1) {
      openNextImage(currentElementIndex);
    }
  }
  
  const findCurrentElementIndex = () => {
    const currentElement = galleryItems.find(el => bigImage.getAttribute('src') === el.original)
    return galleryItems.indexOf(currentElement);
  }