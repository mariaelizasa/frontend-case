export type TodoStatusType = "pending" | "done";

type TodoLinksType = {
  name: string;
  url: string;
};

export interface TodoListType {
  id: string;
  ref: string;
  title: string;
  description: JSX.Element;
  status: TodoStatusType;
  required: boolean;
  links?: TodoLinksType[];
}
