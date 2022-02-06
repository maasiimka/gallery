import { bigImage } from "./consts";
import { openOrCloseModal } from "./openOrCloseModal";

export const removePictureAtribute = () => {
    openOrCloseModal()
    bigImage.setAttribute('src', '');
    bigImage.setAttribute('alt', '');
  }