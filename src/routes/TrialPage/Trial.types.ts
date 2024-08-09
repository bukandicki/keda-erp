export type ItemType = {
  id: number;
  name: string;
  price: number;
}

export interface IItemsSection {
  items: ItemType[];
  soldList: ItemType[];
  onChange: (data: ItemType) => void;
  onSold: (data: ItemType) => void;
}
