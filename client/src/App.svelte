<script>
  // @ts-ignore
import logo from './assets/svelte.png';
  // @ts-ignore
import router from 'page';

  import Home from "./pages/Home.svelte";
  import Register from "./pages/Register.svelte";
  import Header from "./components/Header.svelte";

  let page;
  let params;
  let currentRoute;

  router('/', (ctx) => {
    page = Home;
    currentRoute = ctx.pathname;
  });
  router('/register', (ctx) => {
    page = Register;
    currentRoute = ctx.pathname;
  });

  router.start();
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <Header active={currentRoute} />
  <svelte:component this={page} {params} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

</style>
