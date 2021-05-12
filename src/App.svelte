<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Tailwind from "./Tailwind.svelte";
    import Header from "./components/Header.svelte";

    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";

    export let url = "";
</script>

<Tailwind />
<Router url="{url}">
    <Header />
    <div>
        <Route path="how-it-works"> <About /> </Route>
        <!--for now the router just support case sensitive,
           one workaround colud be add two time the route
           Example.
          <Route path="About" component="{About}" /> 
       -->
        <Route path="/"><Home /></Route>
    </div>
</Router>

<style>
</style>
