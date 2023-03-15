<script lang="ts">

  import svg_github from '../assets/github.svg';

  import svg_svelte from '../assets/svelte.svg';
  import svg_css from '../assets/css.svg';
  import svg_html from '../assets/html.svg';
  import svg_vite from '../assets/vite.svg';
  import svg_javascript from '../assets/javascript.svg';
  import svg_typescript from '../assets/typescript.svg';
  import svg_nodejs from '../assets/nodejs.svg';

  import img_cc_phone from '../assets/cc-phone.png'
  import img_cc_laptop from '../assets/cc-laptop.png'

  type Project = {
    name: string
    img: string
    description?: string
    technologies: Technology[]
  }

  type Technology = {
    name: string
    src: string
  }

  const [
    svelte,
    css,
    html, 
    vite,
    javascript,
    typescript,
    nodejs,
  ] = [
    {
      name: `Svelte`,
      src: svg_svelte,
      href: `https://svelte.dev/`,
    },
    {
      name: `CSS`,
      src: svg_css,
      href: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
    },
    {
      name: `HTML`,
      src: svg_html,
      href: `https://developer.mozilla.org/en-US/docs/Web/HTML`,
    },
    {
      name: `Vite`,
      src: svg_vite,
      href: `https://vitejs.dev/`,
    },
    {
      name: `JavaScript`,
      src: svg_javascript,
      href: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
    },
    {
      name: `TypeScript`,
      src: svg_typescript,
      href: `https://www.typescriptlang.org/`,
    },
    {
      name: `NodeJS`,
      src: svg_nodejs,
      href: `https://nodejs.org/en/about/`,
    },
  ] as const;

  const {name, img, description, technologies} = [
    { 
      name: `Cornelius Custom Knives`,
      img: img_cc_laptop,
      description: `Brochure Site For Cornelius Custom Knives`,
      technologies: [svelte, vite, javascript, html, css, nodejs],
    },
  ][0]

</script>

<div id="my-work" class="page">

  <h2> My Work </h2>

  <!-- <h1> <span> Explore </span> My Creations </h1> -->

  <ul id="my-work-cc" class="projects"> 
    <li>
      <div class="content">
        <h1> {name} </h1>
        <p> {description} </p>
        <div class="links"> 
          <a href="https://github.com/cheeem/Cornelius-Custom-Knives" target="_blank" rel="noreferrer"> 
            <img src={svg_github} alt="" />
            <p> • See The Repository </p>
          </a>
        </div>
        <div class="technologies"> 
          {#each technologies as { href, src, name }}
            <a {href} target="_blank" rel="noreferrer"> 
              <img {src} alt="" />
              <p> • {name} </p>
            </a>
          {/each}
        </div> 
      </div>
      <a class="display" href="#my-work">
        <img src={img_cc_phone} alt="" />
      </a>
    </li>
  </ul>

</div>

<style>

  h2 {
    left: 0;
    right: 0;
    top: 50vh;
  }

  #my-work {
    display: flex;
    flex-direction: column;

    padding: 0;
  }

  .projects {
    display: grid;
  }

  .projects li {    
    display: flex;
    justify-content: space-between;

    padding: var(--nav-height) 0 0 0;

    height: var(--page-height);
  }

  .content {
    padding: 7.5vh 0 7.5vh var(--padding-x);
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1.15em;
    font-weight: 500;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .technologies {
    margin: auto 0;
    display: grid;
    gap: 0.75em;
  }

  :is(.technologies, .links) a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    width: fit-content;
  }

  :is(.technologies, .links) p {
    overflow: hidden;

    white-space: nowrap;
    font-weight: 800;

    border-right: .3em solid transparent;

    translate: -0.06em 0;

    width: 0;

    transition: width 0.5s ease;
  }

  :is(.technologies, .links) a:hover p {
    width: 100%;

    animation: 
      typing 0.45s steps(13, end),
      blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--secondary) }
  }

  :is(.technologies, .links) img {
    width: 3em;
  }

  .display {    
    position: relative;

    background-color: gold;

    padding: 0 10vw;

    cursor: pointer;
  }

  .display::after {
    position: absolute;
    top: 50%;
    left: 50%;

    content: "See It For Yourself";
    font-size: 2em;
    font-weight: 600;
    color: var(--primary);
    text-shadow: 0 0 0.3em var(--dark-3);

    translate: -50% -50%;

    opacity: 0;

    transition: opacity 0.5s ease;
  }

  .display img {
    position: relative;
    top: 7.5vh;

    height: 80vh;

    transition: opacity 0.5s ease;
  }

  .display:hover::after {
    opacity: 1;
  }

  .display:hover img {
    opacity: 0.2;
  }


</style>