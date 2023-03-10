<script lang="ts">

  import { viewport } from '../utils/viewport'

  import HomeGraphic from '../assets/HomeGraphic.svelte'

  let view: boolean = false
    
</script>

<div id="home" class="page">
  
  <div class="content">

    <h2> Portfolio </h2>

    <HomeGraphic />

    <div class="header">
      <h4> Jackson Werner • UI/UX • SWE </h4> 
      <h1> Let's Build Something </h1>
      <div class="cta">
        <h1 class={view && `view`}
          use:viewport
          on:viewportEnter={() => view = true}
        > <span>Incredible</span> </h1> 
        <a href="#my-work">
          <button>  💻 See My Work</button>
        </a>
        <a href="#contact"> 
          <button> 📧 Contact Me </button> 
        </a>
      </div>
    </div>

  </div>

</div>

<style>

  #home {
    height: var(--page-height);
  }

  .content {
    position: relative;

    height: 100%;

    padding-top: 17.5vh;
  }

  h2 {
    top: 0;
    left: 0;

    rotate: 90deg;
    translate: 1em 0;
    transform-origin: top left;
  }

  .header {
    position: sticky;
    top: calc(var(--nav-height) + 10vh);
    bottom: 0;

    font-size: 1.5em;
  }

  h4 {
    grid-area: header;

    font-weight: 600;
    font-size: 0.9em;
  }

  h1 {
    color: var(--dark-alt);
  }

  h1 span::before {
    width: 0;

    transition: width 0.75s ease;
  }

  .view span::before {
    width: 100%;
  }

  .cta {
    display: grid;
    align-items: center;
    gap: 0.3em;

    width: fit-content;
  }

  .cta h1 {
    margin-bottom: 0.5em;
  }

  button {
    width: 100%;
  }

  a:first-of-type button {
    background-color: var(--highlight);
    color: var(--primary);
  }

</style>