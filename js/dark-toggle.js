(function(){
  const storageKey = 'theme-preference';
  const root = document.documentElement;
  const btnId = 'theme-toggle';

  function applyTheme(theme){
    if(theme === 'dark') root.classList.add('dark-mode');
    else root.classList.remove('dark-mode');
  }

  function updateButton(){
    const btn = document.getElementById(btnId);
    if(!btn) return;
    btn.textContent = root.classList.contains('dark-mode') ? '🌙' : '☀️';
  }

  function init(){
    const btn = document.getElementById(btnId);
    if(!btn) return;

    // Load saved preference
    const saved = localStorage.getItem(storageKey);
    if(saved) applyTheme(saved);
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');

    updateButton();

    btn.addEventListener('click', function(){
      const isDark = root.classList.toggle('dark-mode');
      localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
      updateButton();
    });

    // If user has no saved preference, respond to system changes
    if(!saved && window.matchMedia){
      try{
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          applyTheme(e.matches ? 'dark' : 'light');
          updateButton();
        });
      }catch(e){
        // Safari older versions use addListener
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        if(mq.addListener) mq.addListener(e => { applyTheme(e.matches ? 'dark' : 'light'); updateButton(); });
      }
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
