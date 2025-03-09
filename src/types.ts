export interface CardObject {
  url: string;
  desc: string;
  id: string;
}

export interface CardProps {
  card: CardObject;
  handleClick: (card: CardObject) => void;
}

export interface GiphyObject {
  data: {
    id: string;
    title: string;
    images: {
      original: {
        url: string;
      };
    };
  }[];
}

export interface GameHeaderProps {
  count: number;
}
