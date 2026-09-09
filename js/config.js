(() => {
  const script = document.currentScript;
  const scriptPath = script ? new URL(script.src).pathname : location.pathname;
  const marker = '/js/config.js';
  const basePath = scriptPath.endsWith(marker) ? scriptPath.slice(0, -marker.length) : '';
  window.BLACKMARK = window.BLACKMARK || {};
  window.BLACKMARK.config = {
    basePath: basePath || (location.hostname.endsWith('github.io') ? `/${location.pathname.split('/').filter(Boolean)[0] || ''}`.replace(/\/$/, '') : ''),
    repoUrl: 'https://github.com/zydPsycho/CHATGPT-CODES',
    storage: { favorites: 'blackmark_favorites', agent: 'blackmark_agent_state', recent: 'blackmark_recent' }
  };
  window.BLACKMARK.url = path => `${window.BLACKMARK.config.basePath}${path.startsWith('/') ? path : `/${path}`}`;
})();
