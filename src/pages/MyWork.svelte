<script lang="ts">

  import svelte from '../assets/svelte.svg';
  import css from '../assets/css.svg';
  import html from '../assets/html.svg';
  import vite from '../assets/vite.svg';
  import javascript from '../assets/javascript.svg';
  import typescript from '../assets/typescript.svg';
  import node from '../assets/node.svg';

  import img_cc from '../assets/site-cc-home.png'
  import img_nasa from '../assets/site-nasa.png'

  type Project = {
    name: string
    img: string
    description?: string
    technologies: string[]
  }

  const projects: Project[] = [
    { 
      name: `Cornelius Custom Knives`,
      img: img_cc,
      description: `Brochure Site For Chris Cornelius Knives`,
      technologies: [svelte, vite, javascript, html, css, node],
    },
    { 
      name: 'NASA Calendar',
      img: img_nasa,
      description: `Calendar for NASA's Astronomy Picture of the Day`,
      technologies: [svelte, vite, typescript, html, css, node ],
    },
    { 
      name: 'NASA Calendar',
      img: img_nasa,
      description: `Calendar for NASA's Astronomy Picture of the Day`,
      technologies: [svelte, vite, typescript, html, css, node ],
    },
  ]

</script>

<div id="my-work" class="page">

  <h2> My Work </h2>

  <h1> Explore My Creations </h1>

  <ul class="projects"> 
    {#each projects as { name, description, technologies, img, }}
      <li class="project"> 
        <div class="content"> 
          <h4> {name} </h4>
          <p> {description} </p>
          <ul class="technologies">
            {#each technologies as src}
              <li>
                <img {src} alt={src?.split('.svg')[0]?.split('/').at(-1)} /> 
              </li>
            {/each}
          </ul>
        </div>
        <div class="display"> 
          <img src={img} alt={name} /> 
        </div>
      </li>
    {/each}
  </ul>

</div>

<style>

  h2 {
    left: 0;
    right: 0;
    top: 50vh;
  }

  #my-work {
    display: grid;
    gap: 10vh;
  }

  h1 {
    margin-top: 15vh;
    font-size: 3.5em;
  }

  img {
    width: 100%;
  }

  .projects {
    display: grid;
    gap: 7.5vh;
  }

  .project {
    display: flex;
    justify-content: space-between;
    gap: 5em;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1em;

    flex: 2;
  }

  .content h4 {
    font-size: 2em;
  }

  .content p {
    font-weight: 500;
    font-size: 1em;
  }

  .technologies {
    margin: auto 0 0em 0;

    display: grid;
    grid-template-columns: repeat(6, 3em);
    gap: 1em;
  }

  .display {
    overflow: hidden;

    flex: 3;

    cursor: pointer;
  }

  .display > img {
    transition: 
      scale 0.5s ease, 
      opacity 0.5s ease;
  }

  .display:hover > img {
    scale: 1.02;

    opacity: 0.9;
  }

</style>