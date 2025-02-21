import React, { forwardRef } from 'react';

import { Color } from '../../theme';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type AdmonitionProps = {
  variant?: 'note' | 'tip' | 'info' | 'caution' | 'critical';

  /**
   * Optional title to display. If omitted, the variant name will be used instead.
   */
  title?: string;

  children?: React.ReactNode;
};

/**
 * Attract user attention with important static message.
 *
 * Admonitions should be used when you want to attract user's
 * attention with info, tip, or warning box content without
 * overriding screen reader behaviour.
 */
export const Admonition = forwardRef<HTMLDivElement, AdmonitionProps>(
  ({ variant = 'note', title, children }, ref) => {
    const iconName = {
      note: 'infoCircle',
      tip: 'infoCircle',
      info: 'exclamationCircle',
      caution: 'exclamationCircle',
      critical: 'exclamationFill'
    }[variant];

    const bg = {
      note: 'surface-subtle',
      tip: 'surface-subtle',
      info: 'info',
      caution: 'caution',
      critical: 'critical'
    }[variant] as Color;

    const inverse = `${bg}-inverse` as Color;

    return (
      <Stack
        ref={ref}
        align="stretch"
        p="md"
        gap="xs"
        bgc={{
          light: bg,
          dark: bg
        }}
        c={inverse}
      >
        <Group gap="xs">
          <Icon
            c={{
              light: inverse,
              dark: inverse
            }}
            name={iconName}
            size={20}
          />
          <Text as="div" fw="bold" fs="sm" c={inverse} className="uppercase">
            {title ?? variant}
          </Text>
        </Group>

        {children}
      </Stack>
    );
  }
);
