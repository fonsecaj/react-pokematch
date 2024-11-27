import { useCallback, useEffect, useState } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

type DarkModeControllers = {
  enable: () => void;
  disable: () => void;
};

export function useDarkMode(): [boolean, DarkModeControllers] {
  const [isDarkMode, setDarkMode] = useState(false);

  const enable = useCallback(() => {
    setDarkMode(true);
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const disable = useCallback(() => {
    setDarkMode(false);
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  useEffect(() => {
    const isDarkOS = window.matchMedia(COLOR_SCHEME_QUERY).matches;
    if (isDarkOS) {
      enable();
    }
    else {
      disable();
    }
  }, [enable, disable]);

  return [
    isDarkMode,
    {
      enable,
      disable,
    },
  ];
}
