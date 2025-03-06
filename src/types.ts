export interface CardObject {
  url: string;
  desc: string;
  id: number;
}

export interface CardProps {
  card: CardObject;
  handleClick: (card: CardObject) => void;
}
