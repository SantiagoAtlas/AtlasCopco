// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Atlas Copco Docs',
    tagline: 'Documentation for SYS6000 and ASC5000',
    favicon: 'img/favicon.ico',

    url: 'https://your-site-url.com', // cámbialo si vas a subirlo a un dominio
    baseUrl: '/',

    organizationName: 'atlas-copco', // cámbialo si usas GitHub Pages
    projectName: 'docs', // idem

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/atlas-copco/docs/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Atlas Copco Docs',
            logo: {
                alt: 'Atlas Copco Logo',
                src: 'img/logo.png', // Asegúrate que el archivo existe en static/img/
            },
            items: [
                { to: 'docs/sys6000', label: 'SYS6000', position: 'left' },
                { to: 'docs/asc5000', label: 'ASC5000', position: 'left' },
                {
                    href: 'https://github.com/atlas-copco/docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        { label: 'SYS6000', to: '/docs/sys6000' },
                        { label: 'ASC5000', to: '/docs/asc5000' },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'Atlas Copco',
                            href: 'https://www.atlascopco.com/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Atlas Copco.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

export default config;