import * as React from 'react';
import * as styles from './checkbox.module.less';

interface Props {
  checked: boolean;
  onClick: () => void;
}

const Checkbox: React.FC<Props> = ({
  checked = false,
  onClick,
}) => (
  <>
    <input
      checked={checked}
      className={styles.hiddenCheckbox}
      type="checkbox"
    />
    <div
      aria-checked={checked}
      className={[
        styles.styledCheckbox,
        checked ? styles.checked : styles.unchecked,
      ].join(' ')}
      onClick={onClick}
      onKeyPress={onClick}
      role="checkbox"
      tabIndex={0}
    >
      <svg
        className={[
          styles.svg,
          checked ? styles.svgVisible : styles.svgHidden,
        ].join(' ')}
        fill="none"
        height="13"
        viewBox="0 0 16 13"
        width="16"
      >
        <path
          d="M2 7.5L5.65217 11L14 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
    </div>
  </>
);

export default Checkbox;
