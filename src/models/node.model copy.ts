interface BlockAttributes {
  index: number;
  timestramp: number;
  data: string;
  "previous-hash": string;
  hash: string;
}
export interface Block {
  id: string;
  type: string;
  attributes: BlockAttributes;
}
