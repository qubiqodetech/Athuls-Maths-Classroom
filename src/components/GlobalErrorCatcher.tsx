import React from 'react';
export function GlobalErrorCatcher() {
  return (
    <script dangerouslySetInnerHTML={{ __html: `
      window.onerror = function(msg, url, line, col, error) {
        var div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.left = '0';
        div.style.zIndex = '999999';
        div.style.background = 'red';
        div.style.color = 'white';
        div.style.padding = '20px';
        div.style.width = '100vw';
        div.style.height = '100vh';
        div.style.overflow = 'auto';
        div.innerText = 'ERROR: ' + msg + '\\n' + url + ':' + line + ':' + col + '\\n' + (error && error.stack ? error.stack : '');
        document.body.appendChild(div);
      };
      window.addEventListener('unhandledrejection', function(e) {
        var div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.left = '0';
        div.style.zIndex = '999999';
        div.style.background = 'red';
        div.style.color = 'white';
        div.style.padding = '20px';
        div.style.width = '100vw';
        div.style.height = '100vh';
        div.style.overflow = 'auto';
        div.innerText = 'UNHANDLED REJECTION: ' + (e.reason && e.reason.stack ? e.reason.stack : e.reason);
        document.body.appendChild(div);
      });
    `}} />
  );
}
