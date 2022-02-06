import { lightbox } from "./consts";

export const openOrCloseModal = () => {
    lightbox.classList.toggle('is-open');
}