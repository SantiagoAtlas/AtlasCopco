// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
    // Manually create a sidebar with only SYS6000 and ASC5000
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Documentation',
            items: [
                'sys6000',
                'asc5000',
            ],
        },
    ],
};

export default sidebars;
