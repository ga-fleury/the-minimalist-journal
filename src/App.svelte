<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Tailwind from "./Tailwind.svelte";
    import Footer from "./components/Footer.svelte";

    // routes
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Dashboard from "./routes/Dashboard.svelte";
    import Blog from "./routes/Blog.svelte";

    export let url = "";
</script>

<Tailwind />
<Router url="{url}">
    <div>
        <Route path="how-it-works"><About /></Route>
        <Route path="/"><Home /></Route>
        <Route path="dashboard"><Dashboard /></Route>
        <Route path="blog"><Blog /></Route>
    </div>
    <Footer />
</Router>

<style global>
@font-face { 
  font-family: 'NeueHaas';
  src: url('../fonts/NeueHaasDisplay-Roman.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face { 
  font-family: 'NeueHaas';
  src: url('../fonts/NeueHaasDisplay-Bold.woff') format('woff');
  font-weight: bold;
  font-style: bold;
  font-display: swap;
}
@font-face { 
  font-family: 'NeueHaas';
  src: url('../fonts/NeueHaasDisplay-Medium.woff') format('woff');
  font-weight: 500;
  font-style: medium;
  font-display: swap;
}

body {
    font-family: "NeueHaas", sans-serif !important;
}

    ::-webkit-scrollbar {
        width: 0px;
        display: none;
    }
    .material-icons.md-18 {
        font-size: 18px;
    }
    .material-icons.md-24 {
        font-size: 24px;
    }
    .material-icons.md-36 {
        font-size: 36px;
    }
    .material-icons.md-48 {
        font-size: 48px;
    }
</style>
