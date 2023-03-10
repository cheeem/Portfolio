<script lang="ts">

  import type { PageLink } from './utils/types';

  import Nav from './Nav.svelte'

  import Home from './pages/Home.svelte'
  import MyWork from './pages/MyWork.svelte'

  const page_links: PageLink[] = [
    { label: `Home`, href: `#home`, },
    { label: `My Work`, href: `#my-work`, },
    { label: `Contact`, href: `#contact`, },
  ]

  let active: number = 0

  const setActive = (i: number) => active = i

</script>

  <Nav {page_links} {active} {setActive} />

  <main>

    <Home />
    <MyWork />
  
  </main>

<style>

  main {
    display: grid;
    gap: 50vh;

    font-size: var(--font-size);
  }
  
</style>