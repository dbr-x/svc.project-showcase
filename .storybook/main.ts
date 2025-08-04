import type { StorybookConfig } from "@storybook/svelte-vite"

const config: StorybookConfig = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/{,*}.stories.@(js|ts|svelte)",
    ],
    "addons": [
        "@storybook/addon-svelte-csf",
    ],
    "framework": {
        "name": "@storybook/svelte-vite",
        "options": {},
    },
    "core": {
        "disableWhatsNewNotifications": true,
    },
}

export default config
