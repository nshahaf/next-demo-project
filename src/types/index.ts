export interface Articles {
    articles: Article[];
}

export interface Article {
    id: number;
    title: string;
    text: string;
}

export interface Cards {
    cards: Card[]
}

export interface Card {
    id: number
    title: string
    text: string
    description: string
    imgUrl: string
}