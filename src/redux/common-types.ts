import { ItemType, SimilarListItemsType } from "./item/types";
import {
  SearchedItemsByNameTypes,
  SearchedItemsByPersonTypes,
} from "./search/types";

type InferTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionCreatorsTypes<
  T extends { [key: string]: (...arg: any[]) => any }
> = ReturnType<InferTypes<T>>;

export type commonResponseTypes =
  | ItemType
  | SimilarListItemsType
  | SearchedItemsByNameTypes
  | SearchedItemsByPersonTypes;
