import { ItemType, SimilarListItemsType } from "./item/types";
import {
  SearchedItemsByNameTypes,
  SearchedItemsByPersonTypes,
} from "./search/types";

type InferTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionCreatorsTypes<
  // eslint-disable-next-line no-unused-vars
  T extends { [key: string]: (...arg: any[]) => any }
> = ReturnType<InferTypes<T>>;

export type commonResponseTypes =
  | ItemType
  | SimilarListItemsType
  | SearchedItemsByNameTypes
  | SearchedItemsByPersonTypes;

export type AxiosResponseType<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: {};
};
