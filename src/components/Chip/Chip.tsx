import { PressEvent } from '@react-types/shared';
import React from 'react';

import { Color, bc } from '../../theme';
import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';

export type ChipProps = StyleSystemProps & {
  variant?: 'solid' | 'outline' | 'indicator';

  children?: React.ReactNode;

  isRemovable?: boolean;

  /** Handler that is called when the press is released over the remove button. */
  onRemove?: (e: PressEvent) => void;
};

/**
 * Display chip, pill or tag
 *
 * ## Accessibility
 * - Check contrast of your chip against light and dark themes.
 *  Some variants and colors may work with one but not the other.
 *
 * <!-- @ruiPolymorphic -->
 */
export const Chip = polymorphicForwardRef<'div', ChipProps>(
  ({ as, c = 'surface-subtle', variant = 'solid', isRemovable, onRemove, children, ...props }, ref) => (
    <Box
      ref={ref}
      as={as || 'div'}
      bgc={variant === 'solid' ? c : undefined}
      c={
        {
          solid: `${c}-inverse`,
          outline: c,
          indicator: 'neutral-subtle'
        }[variant] as Color
      }
      fs="xs"
      fw="semibold"
      className={cx('border border-clear rounded-full inline-block', {
        [bc(c as Color)]: variant !== 'indicator',
        'border-neutral-subtle': variant === 'indicator' || c === 'neutral-subtle'
      })}
      {...props}
    >
      <Group align="center" justify="center" px="xxs" gap="xxs">
        {variant === 'indicator' && <Box className="rounded-full" w={12} h={12} bgc={c} />}

        {children}

        {isRemovable && (
          <CloseButton p={0} size={12} iconProps={{ p: 'xxs' }} label="Remove" onPress={onRemove} />
        )}
      </Group>
    </Box>
  )
);
