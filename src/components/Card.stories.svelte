<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf"
    import Card from "./Card.svelte"

    const { Story } = defineMeta({
        title: "Components/Card",
        component: Card,
        tags: ['autodocs'],
        args: {
            tags: ["TS", "Svelte"],
            title: "title-text",
            body: "Item description text",
            links: [
                new URL("https://example.com"),
                new URL("https://test.com"),
            ],
            state: {},
            theme: {
                accent: "#db1",
                hilite: "#f12",
            },
        }
    })
</script>

<Story name="Card" />
