<script lang=ts>
    type Color = `#${string}`
    
    export type Preview = {
        tags: string[],
        title: string,
        body: string,
        links: string[],
        state?: {
            active?: boolean,
        },
        theme: {
            accent: Color,
        },
    }

    const { tags=[], title, body, links=[], state={}, theme }: Preview = $props()
</script>

<style lang=scss>
    article {
        aspect-ratio: 2;
        border: solid 2px;
        border-radius: 1ch;
        max-width: 50ch;
        padding: 0 1ch;
        user-select: none;

        &:hover {
            $bg-opacity: 30%;
            background-color: color-mix(in srgb, var(--theme-main) $bg-opacity), transparent calc(100% - $bg-opacity);
            background-color: var(--theme-main);
        }

        &[aria-current=true] {
            transition: all 0.2s ease-in-out;
            transform: scale(1);
        }

        &[aria-current=false] {
            transition: all 0.2s ease-in-out;
            transform: scale(.9);
        }

        h1 {
            text-transform: capitalize;
            white-space: nowrap;
        }
    }
</style>

<article style:--theme-main={theme.accent + '3'} style:border-color={theme.accent} aria-current={state.active}>
    {#if tags.length}
        <header style:display=flex style:gap=1ch>
            {#each tags as tag}
                <span>
                    <small><p style:background-color=grey
                        style:border-radius=.3ch
                        style:color=lightgrey
                        style:font-family=monospace
                        style:margin-bottom=0
                        style:padding='.5ch 3ch'
                    >{tag}</p></small>
                </span>
            {/each}
        </header>
        <hr>
    {/if}

    <h1>{title.replace(/[-.]+/g, ' ')}</h1>
    <p style:padding-bottom=1ch>{body}</p>

    <!-- {#if links.length}
        <hr>
        <ul style:display=flex
            style:flex='1 1 0'
            style:justify-content=flex-end
            style:gap=1ch
            style:padding=0
            style:margin=0
        >
            {#each links as href}
                <li style:list-style=none>
                    <a {href}>{href}</a>
                </li>
            {/each}
        </ul>
    {/if} -->
</article>
