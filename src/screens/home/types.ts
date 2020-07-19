export type HandlePressTypes = (type: string, value: string) => void;

export type ButtonTypes = {
  name: string;
  color?: string;
  type: string;
  value: string;
  size?: string;
};

export type ListButtonsTypes = {
  listButtons: Array<Array<ButtonTypes>>,
  handlePress: any

}

