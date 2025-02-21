import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';

export type RadioIconProps = DOMAttributes<FocusableElement> &
  StyleSystemProps & {
    isSelected?: boolean;
    isDisabled?: boolean;
    isFocusVisible?: boolean;
  };

/**
 * Controlled slot renderer for a radio.
 *
 * <!-- @ruiInternal -->
 * @internal
 */
export const RadioIcon = ({ isSelected, isDisabled, isFocusVisible, ...props }: RadioIconProps) => (
  <Box
    miw={20}
    w={20}
    h={20}
    className={cx(
      'border-2 rounded-full',

      // TODO: I don't like this usage of class selectors abusing active.
      { 'bg-surface border-outline-active': !isSelected && !isDisabled },
      { 'bg-surface border-primary': isSelected && !isDisabled },
      { 'border-outline-disabled bg-input-disabled': isDisabled },
      { 'ring focus-ring': isFocusVisible }
    )}
    {...props}
  >
    {isSelected && (
      <Icon
        className="[&>svg]:animate-pop"
        size={16}
        c={!isDisabled ? 'primary' : 'input-disabled'}
        name="circleFill"
        block
      />
    )}
  </Box>
);
