import React from 'react';

// Re-export mergeProps, we use it everywhere.
import { mergeProps as ariaMergeProps } from '@react-aria/utils';
import classNames, { ClassArray } from 'clsx';

export * from './polymorphics';
export * from './createPolymorphicComponent';
export * from './theme';

export function cx(...args: ClassArray): string {
  return classNames(args);
}

interface Props {
  [key: string]: any;
}
type TupleTypes<T> = {
  [P in keyof T]: T[P];
} extends {
  [key: number]: infer V;
}
  ? V
  : never;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never;

export function mergeProps<T extends Props[]>(...args: T) {
  return ariaMergeProps(...args);
}

/**
 * Your typical ref merge. This version supports our polymorphic refs.
 */
export function mergeRefs<T = any>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined>
): React.RefCallback<T> {
  return (value: any) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null && ref !== undefined) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

// TODO: Support var args. I'd like a single
// const [margin, padding, ...rest] = splitProps(props, marginProps, paddingProps, ...)
export function splitProps<P extends { [K: string]: any }>(propNames: readonly string[], props: P) {
  const names = Object.keys(props);
  const matched = names
    .filter((k) => propNames.indexOf(k) >= 0)
    .reduce((a, k) => ((a[k] = props[k]), a), {} as { [K: string]: any });

  const unmatched = names
    .filter((k) => propNames.indexOf(k) < 0)
    .reduce((a, k) => ((a[k] = props[k]), a), {} as { [K: string]: any });

  return [matched, unmatched];
}
