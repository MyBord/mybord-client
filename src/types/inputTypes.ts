export interface DropdownOption {
  label: string;
  value: number | string;
}

export interface DropdownProps {
  multiSelect?: boolean;
  onChange?: (value: string | string[] | number | number[]) => void;
  options: DropdownOption[];
  value?: string | string[] | number | number[];
}
