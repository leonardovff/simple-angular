import { Block } from "./node.model copy";

export interface Node {
  url: string;
  online: boolean;
  name: string;
  loading: boolean;
  status?: string;
  blocks: {
    loading: boolean;
    data: Block[];
  };
}
