export interface DropdownOption {
  label: string;
  value: number | string;
}

export interface DropdownProps {
  multiSelect?: boolean;
  onChange?: () => void;
  options: DropdownOption[];
  value?: string | string[] | number | number[];
}
