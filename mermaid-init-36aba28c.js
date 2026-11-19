// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

(() => {
    const darkThemes = ['ayu', 'navy', 'coal'];
    const lightThemes = ['light', 'rust'];

    const classList = document.getElementsByTagName('html')[0].classList;

    let lastThemeWasLight = true;
    for (const cssClass of classList) {
        if (darkThemes.includes(cssClass)) {
            lastThemeWasLight = false;
            break;
        }
    }

    const theme = lastThemeWasLight ? 'default' : 'dark';
    mermaid.initialize({ startOnLoad: true, theme });

    // Simplest way to make mermaid re-render the diagrams in the new theme is via refreshing the page

    for (const darkTheme of darkThemes) {
        document.getElementById('mdbook-theme-' + darkTheme).addEventListener('click', () => {
            if (lastThemeWasLight) {
                window.location.reload();
            }
        });
    }

    for (const lightTheme of lightThemes) {
        document.getElementById('mdbook-theme-' + lightTheme).addEventListener('click', () => {
            if (!lastThemeWasLight) {
                window.location.reload();
            }
        });
    }
})();

// In mermaid-init.js
// try to decrease flowchart size
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
        // Decrease internal padding and minimum node size
        padding: 10,          // Default is often 15 or 16
        nodeSpacing: 30,      // Horizontal space between nodes
        rankSpacing: 40,      // Vertical space between ranks
        minNodeWidth: 50,     // Minimum width for a block
        minNodeHeight: 30,    // Minimum height for a block
        useMaxWidth: true,
    },
    themeVariables: {
        // Decrease the global font size
        fontSize: '12px',     // Default is typically 14px or 16px
    }
});
