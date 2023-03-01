<script lang="ts">

  import type { PageLink } from './utils/types';

  import Nav from './Nav.svelte'

  import Home from './pages/Home.svelte'

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
  
  </main>

<style>

  main {
    font-size: var(--font-size);
  }
  
</style>