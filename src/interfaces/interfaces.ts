import { Status, SortType } from '../enums/enums';
export interface IButtons {
  isPanel: boolean;
  setIsPanel: (flag: boolean) => void;
}
export interface ICardContainer {
  isPanel: boolean;
}

export interface Image {
  url: string;
}
export interface IAllBooks {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: Image;
  categories: string[];
  id: number;
  booking?: any;
  delivery?: any;
  histories?: any;
}
export interface IBooksState {
  allBooks: IAllBooks[];
  status: Status;
  userInput: string;
}
export interface IAllCategories {
  name: string;
  path: string;
  id: number;
}
export interface ICategoriesState {
  allCategories: IAllCategories[];
  status: string;
}
export interface ICard {
  book: IAllBooks;
  isPanel: boolean;
}
export interface IRating {
  rating: number;
}

export interface Image {
  url: string;
}

export interface IUser {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl?: any;
}

export interface IComment {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: IUser;
}

export interface IBookPage {
  id: number;
  title: string;
  rating: number;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: Image[];
  categories: string[];
  comments: IComment[];
  booking?: any;
  delivery?: any;
  histories?: any;
}

export interface IBookPageState {
  book: IBookPage | null;
  status: Status;
}

export interface ISlider {
  gallery: Image[];
}
export interface IMoreInfo {
  info: IBookPage;
}
export interface IUserComments {
  comments: IComment[];
}
export interface IRules {
  contentView: string;
}
export interface IBurgerSlice {
  isBurgerOpen: boolean;
  isRatesOpen: boolean;
  isSearchOpen: boolean;
  isMenuOpen: boolean;
}
export interface ISortSlice {
  sortType: SortType;
}
