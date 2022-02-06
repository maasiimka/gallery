import { bigImage } from "./consts";
import { openOrCloseModal } from "./openOrCloseModal";

export const setPictureAtribute = (object) => {
    bigImage.setAttribute('src', object.original);
    bigImage.setAttribute('alt', object.description);
    
    openOrCloseModal();
}