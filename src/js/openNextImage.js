import { bigImage } from "./consts";
import { galleryItems } from "./list";

export const openNextImage = (el) => {
    bigImage.setAttribute('src', galleryItems[el + 1].original);
    bigImage.setAttribute('alt', galleryItems[el + 1].description);
  }