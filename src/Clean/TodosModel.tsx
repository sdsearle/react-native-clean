export type todosModel = {
  list: todoModel[];
};

export type todoModel = {
  id: number;
  text: string;
};

export const todosBase: todoModel[] = [{id: 0, text: `Todo #0`}];
