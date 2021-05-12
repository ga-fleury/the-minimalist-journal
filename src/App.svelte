<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Tailwind from "./Tailwind.svelte";
    import Header from "./components/headers/Header.svelte";
    import HeaderTop from "./components/headers/HeaderTop.svelte";
    import Footer from "./components/Footer.svelte";

    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";

    export let url = "";
</script>

<Tailwind />
<Router url="{url}">
    <Header />
    <HeaderTop />
    <div>
        <Route path="how-it-works"><About /></Route>
        <!--for now the router just support case sensitive,
           one workaround colud be add two time the route
           Example.
          <Route path="About" component="{About}" /> 
       -->
        <Route path="/"><Home /></Route>
    </div>
    <Footer />
</Router>

<style global>
@font-face { 
  font-family: 'NeueHaas';
  src: url('src/icons/NeueHaasDisplay-Roman.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face { 
  font-family: 'NeueHaas';
  src: url('src/icons/NeueHaasDisplay-Bold.woff') format('woff');
  font-weight: bold;
  font-style: bold;
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
