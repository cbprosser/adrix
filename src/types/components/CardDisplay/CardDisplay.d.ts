import { APICard, APICardFace, APILayout } from '../../';

export interface CardDisplayProps {
  card?: APICard;
}

export interface CardFaceDisplayProps {
  face: APICardFace;
}

export interface CardImageDisplayProps {
  faces: APICardFace[];
  layout?: APILayout;
}

export interface CardImageDisplayState {
  face: 0 | 1;
}
