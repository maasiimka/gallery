import { removePictureAtribute } from "./removePictureAtribute";

export const closeModalWithEscape = (e) => {
    if(e.key === "Escape") {
      removePictureAtribute();
    }
}