export type DropdownValue = string | string[] | number | number[];

export interface DropdownOption {
  label: string;
  value: number | string;
}

export interface DropdownProps {
  multiSelect?: boolean;
  onChange?: (value: DropdownValue) => void;
  options: DropdownOption[];
  value?: DropdownValue;
}
