

type InferTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferValueTypes<T extends {[key: string]: (...arg: any[])=>any}> = ReturnType<InferTypes<T>>