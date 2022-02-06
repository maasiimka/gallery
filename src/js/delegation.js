import {setPictureAtribute} from './setPictureAtribute'
import { galleryItems } from './list';

export const findTarget = event =>{

    event.preventDefault();
    const target = event.target;
  
    if(target.nodeName !== 'IMG')return;
  
    const urlOfSmallPicture = target.getAttribute('src');
    const pictureForModal = galleryItems.find(el => urlOfSmallPicture === el.preview);
       
    setPictureAtribute(pictureForModal);
  }