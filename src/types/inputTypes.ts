export interface DropdownOption {
  label: string;
  value: number | string;
}

export interface DropdownProps {
  onChange?: () => void;
  options: DropdownOption[];
  value?: string | string[] | number | number[];
}
