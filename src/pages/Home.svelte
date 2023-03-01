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
      <h4> Jackson Werner </h4> 
      <h1> Let's Build Something </h1>
      <div class="cta">
        <h1 class={view && `view`}
          use:viewport
          on:viewportEnter={() => view = true}
        > <span>Incredible</span> </h1> 
        <button> <a href="#my-work"> 💻 See My Work </a> </button>
        <button> <a href="#contact"> 📧 Contact Me </a> </button>
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

    padding-top: 20vh;
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

  button:first-of-type {
    background-color: var(--highlight);
  }

  button:first-of-type a {
    color: var(--primary);
  }

</style>