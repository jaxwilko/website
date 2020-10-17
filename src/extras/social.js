import tippy from 'tippy.js';

export default class Social
{
    static bind() {
        document.querySelectorAll("a.social-icon").forEach(function (a) {
            tippy(a, {
                content: a.getAttribute("data-title"),
                popperOptions: {
                    modifiers: {
                        preventOverflow: { enabled: false },
                        hide: { enabled: false }
                    }
                }
            });
        });
    }
}
