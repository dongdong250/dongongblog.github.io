(() => {
  const docEl = document.documentElement;

  const setDarkMode = () => {
    docEl.classList.add('dark');
  };

  const setLightMode = () => {
    docEl.classList.remove('dark');
  };

  const query = window.matchMedia('(prefers-color-scheme: dark)');

  // Set initial theme
  if (query.matches) {
    setDarkMode();
  } else {
    setLightMode();
  }

  // Listen for changes
  query.addEventListener('change', (e) => {
    if (e.matches) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });
})();