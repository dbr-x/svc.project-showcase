<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf"
    import Default from "./.component.svelte"

    const { Story } = defineMeta({
        title: "Example/Showcase Grid",
        component: Default,
        tags: ['autodocs'],
        args: {
            projects: [
                {
                    title: "project-1",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    state: {},
                    tags: ["Typescript", "Svelte"],
                },
                {
                    title: "project-2 with long title",
                    body: "Item description.",
                    state: {},
                    tags: ["C#", "Specflow"],
                },
                {
                    title: "project-3",
                    body: "Item description.",
                    state: {},
                    tags: ["Docker", "Linux", "Bash", "JS", "CucumberJS"]
                },
            ],
            theme: {
                accent: "#db1"
            },
        }
    })
</script>

<style>
    :global(#storybook-root,  #storybook-root h1) {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 100;
    }
</style>

<Story name="Showcase Grid" />
