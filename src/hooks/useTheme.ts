import { useEffect, useLayoutEffect, useState } from 'react';

import { Theme, ThemeProp } from '~/types';
import { resolveThemeProp } from '~/utils';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  useLayoutEffect(() => {
    // TODO: More efficient method. This is terrible
    // but I need something to work with atm.
    // Will probably use a context + global RUI provider
    // that also handles all the other stuff we need (toast portals, etc)

    // TODO: This doesn't properly handle changes
    // triggered in Storybook. We need an observer
    // to watch for theme changes. 

    // Also - this doesn't handle nested or adjacent themes.
    // Really, it needs to just use RUI Provider.

    const el = document.querySelector('[data-theme]');
    if (el) {
      setTheme(el.getAttribute('data-theme') as Theme);
    }
  }, []);

  return {
    theme,
    resolve: <T>(prop: ThemeProp<T>) => resolveThemeProp(prop, theme)
  };
}
