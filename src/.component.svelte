<script lang=ts>
    import Card, { type Preview } from "./components/Card.svelte"

    const getPadding = (element: HTMLElement) => {
        return parseInt(getComputedStyle(element).paddingLeft) * 2
    }

    const getShouldScroll = (container?: HTMLElement) => {
        if (!container) {
            return false
        }

        return container.scrollWidth - getPadding(container) > container.clientWidth
    }

    let { projects, theme }: { 
        projects: Omit<Preview, 'theme'>[],
        theme: Preview['theme'], 
    } = $props()

    let container = $state<HTMLElement>()
    let containerWidth = $state(0)

    let shouldScroll = $derived(containerWidth ? getShouldScroll(container) : false)
    let focusedItemIndex = $derived(shouldScroll ? 0 : -1)

    function updateFocusedItemIndex({ currentTarget }) {
        const { scrollLeft, scrollWidth } = currentTarget
        const padding = getPadding(currentTarget)

        const scrollMax = scrollWidth - padding

        const x = scrollLeft / scrollMax 
        const count = Object.keys(projects).length

        const i = Math.min(count - 1, Math.floor(x * count))

        focusedItemIndex = i
    }
</script>

<style>
    a {
        color: inherit;
        text-decoration: inherit;
    }

     li[aria-current=true] {
        transition: all 0.2s ease-in-out;
        transform: scale(1);
    }
        
    li[aria-current=false] {
        transition: all 0.2s ease-in-out;
        transform: scale(.9);
    }
</style>

<ul bind:this={container} bind:clientWidth={containerWidth} onscroll={updateFocusedItemIndex}
    style:display=flex
    style:gap=1ch
    style:align-items=center
    style:justify-content={!shouldScroll ? 'center' : null}
    style:overflow-x={shouldScroll ? 'scroll' : null}
    style:padding={shouldScroll ? '0 50%' : 0}
    style:scroll-snap-type={shouldScroll ? 'x mandatory' : null}
>
    {#each projects as { tags, title, body, links, state }, i}
        <a target=_blank href={links[0]}>
            <li style:list-style=none style:scroll-snap-align=center aria-current={
                focusedItemIndex >= 0 
                    ? i === focusedItemIndex 
                    : null
            }>  
                <Card {tags} {title} {body} {links} {state} {theme}  />
            </li>
        </a>
    {/each}
</ul>
