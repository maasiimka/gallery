import { bigImage } from "./consts";
import { galleryItems } from "./list";

export const findCurrentElementIndex = () => {
    const currentElement = galleryItems.find(el => bigImage.getAttribute('src') === el.original)
    return galleryItems.indexOf(currentElement);
  }