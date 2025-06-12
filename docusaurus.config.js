// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer";

const attributions = `
<p style="margin-bottom: 0.5rem">Site font is <a href="https://www.brailleinstitute.org/freefont/">Atkinson Hyperlegible</a>. This website was created with <a href="https://docusaurus.io/">Docusaurus</a>.</p>
<div style="display: flex; flex-direction: column; align-items: center">
  <p style="margin-top: 0; margin-bottom: 0.25rem">
    <a href="https://cfl.dev" property="dct:title" rel="cc:attributionURL">cfl.dev</a> by the CFL contributors is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noopener noreferrer" style="display:inline-block;" target="_blank">CC BY-SA 4.0</a>
  </p>
  <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noopener noreferrer" style="display:inline-block;" target="_blank">
    <img src="/by-sa.svg" width="120" alt="CC BY-SA 4.0 Icons"/>
  </a>
</div>
`;

const config = {
    future: {v4: true},

    title: "CFL",
    url: "https://cfl.dev",
    baseUrl: "/",

    favicon: "/favicon.ico",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    markdown: {format: "md"},

    i18n: {defaultLocale: "en", locales: ["en"]},

    presets: [[
        "classic",
        {
            docs: false,
            blog: false,
            theme: {customCss: "./src/css/custom.css"},
        },
    ]],

    themeConfig: {
        navbar: {
            title: "Centre for Learning",
            logo: {
                alt: "",
                src: "iconLight.svg",
                srcDark: "iconDark.svg",
            },
            items: [
                {
                    type: "dropdown",
                    label: "Topics",
                    position: "left",
                    items: [
                        {label: "OOP & Java", href: "https://cfl.dev/java"},
                    ],
                },
            ],
        },
        footer: {
            style: "light",
            links: [
                {
                    label: "Repository",
                    href: "https://codeberg.org/cfl/cfl.dev",
                },
            ],
            copyright: attributions,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.oceanicNext,
        },
    },
};

export default config;
