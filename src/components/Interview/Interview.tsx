import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { Group } from '../Group';
import { Text } from '../Text';
import { RowSlotProps, UnstyledList } from '../UnstyledList';
import { VisuallyHidden } from '../VisuallyHidden';

export type InterviewVariant = 'qa' | 'storytelling';

export type InterviewProps = StyleSystemProps & {
  variant?: InterviewVariant;

  /** <Item /> components only */
  children: CollectionChildren<any>;
};

type InterviewItemProps = RowSlotProps & {
  variant: InterviewVariant;
};

function InterviewItem({ item, checkboxProps, variant, ...rowProps }: InterviewItemProps) {
  // boxes should be 32x32, 1.25rem 400 weight
  // Except 1.25rem isn't in their font scale.

  // TODO: Using min-w-[32px] because there's no matching min-w tailwind class.
  // Need to add them for each breakpoint manually for now... :\
  return (
    <div {...rowProps}>
      <Group gap={0} mb="md">
        {variant === 'qa' && (
          <Text as="div" fs="md" bgc="surface-bold" mr="md" miw={32} h={32} ta="center" aria-hidden>
            Q
          </Text>
        )}

        <VisuallyHidden>Question</VisuallyHidden>
        <Text as="div" fs={variant === 'qa' ? 'md' : 'base'} fw="bold">
          {item.textValue}
        </Text>
      </Group>
      <Group gap={0}>
        {variant === 'qa' && (
          <Text as="div" fs="md" bgc="surface-bold" mr="md" miw={32} h={32} ta="center" aria-hidden>
            A
          </Text>
        )}
        <VisuallyHidden>Answer</VisuallyHidden>
        <Text as="div" mb="xxl">
          {item.rendered}
        </Text>
      </Group>
    </div>
  );
}

/**
 * An article written in list format.
 *
 * A transcript of an interview that includes both the interviewer’s direct
 * questions and the interviewee’s response in written format.
 *
 * ## Accessibility
 *
 * - "Q" and "A" labels are expanded to "Question" and "Answer" for screen readers
 */
export const Interview = forwardRef<HTMLUListElement, InterviewProps>(
  ({ variant = 'qa', children, ...props }, ref) => (
    <UnstyledList
      ref={ref}
      selectionMode="none" // Interviews are not interactive
      disabledBehavior="all"
      renderRow={(props) => <InterviewItem variant={variant} {...props} />}
      {...props}
    >
      {children as any /* TODO: Make this work without a cast */}
    </UnstyledList>
  )
);
