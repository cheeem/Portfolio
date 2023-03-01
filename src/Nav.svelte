<script lang="ts">

  import type { PageLink } from './utils/types';

  export let page_links: PageLink[];
  export let active: number
  export let setActive: Function

</script>

<nav>

  <div class="logo">
    <a href="#home"> JW </a>
  </div>

  <ul>
    {#each page_links as { label, href, }, i}
      <li class={i === active && `active`}
        on:click={setActive(i)}
        on:keydown={setActive(i)}
      > 
        <a {href}>
          {label}
        </a>
      </li>
    {/each}
  </ul>

</nav>

<style>

  nav {
    z-index: 10;
    
    position: fixed;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--nav-height);
    width: 100%;
  
    padding: 0 var(--padding-x);

    background-color: var(--primary);

    font-size: var(--nav-font-size);
  }

  .logo {
    display: grid;
    place-items: center;

    flex-grow: 0;

    aspect-ratio: 1;

    margin: var(--padding-y) 0;
    padding: 0.5em;

    background-color: var(--highlight);

    font-size: 1em;
    font-weight: 600;

    border-radius: 50%;

    cursor: pointer;

    transition: 
      background-color 0.2s ease,
      scale 0.2s ease
    ;
  }

  .logo:hover {
    background-color: var(--highlight2);

    scale: 1.05;
  }

  .logo a {
    color: var(--primary);
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 4vw;
  }

  li {
    cursor: pointer;
  }

  a {
    position: relative;
    
    font-size: 0.85em;
    font-weight: 600;
    text-decoration: none;
  }

  li a::after {
    position: absolute;
    left: 0;
    bottom: -0.5em;

    height: 0.15em;
    width: 0;

    background-color: var(--dark);

    content: "";

    transition: width 0.2s ease;
  }

  li:hover a::after {
    width: 100%;
  }

</style>