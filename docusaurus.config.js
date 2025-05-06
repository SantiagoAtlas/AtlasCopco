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
            title: '', // Ocultamos el texto aquí
            logo: {
                alt: 'Atlas Copco Logo',
                src: 'img/logo.svg',
                href: 'https://www.atlascopco.com', // Este es el link que se activa al dar clic en el logo
            },
            items: [
                {
                    to: 'https://www.atlascopco.com', // Este ítem será el "Atlas Copco" que quieres que aparezca
                    label: 'Atlas Copco',
                    position: 'left',
                },
                // otros ítems que ya tengas
            ],
        },
        footer: { // Coma agregada aquí
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
