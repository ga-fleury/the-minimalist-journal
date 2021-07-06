<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Tailwind from "./Tailwind.svelte";

    // routes
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Dashboard from "./routes/Dashboard.svelte";
    import Dashboard2 from "./routes/Dashboard2.svelte";
    import Blog from "./routes/Blog.svelte";
    import Login from "./routes/Login.svelte";

    export let url = "";

    export let userLogged = {
        status: false,
        stname: "",
    };

    function handleLoginHeader(event) {
        userLogged.status = true;
        let str = event.detail.nome_usuario;
        let spaceIndex = str.indexOf(" ");
        console.log(spaceIndex === -1 ? str : str.substr(0, spaceIndex));
        return spaceIndex === -1
            ? (userLogged.stname = str)
            : (userLogged.stname = str.substr(0, spaceIndex));
    }
</script>

<svelte:head>
    <title>The Minimalist Journal</title>
</svelte:head>

<Tailwind />
<Router {url}>
    <div>
        <Route path="how-it-works"><About {userLogged} /></Route>
        <Route path="/"><Home {userLogged} on:logou={handleLoginHeader} /></Route>
        <Route path="dashboard2"><Dashboard2 {userLogged} /></Route>
        <Route path="dashboard"><Dashboard /></Route>
        <Route path="blog"><Blog /></Route>
        <Route path="login"
            ><Login {userLogged} on:logou={handleLoginHeader} /></Route
        >
    </div>
</Router>

<style global>
    ::selection {
        background-color: #333;
        color: #eee;
    }
    @font-face {
        font-family: "NeueHaas";
        src: url("../fonts/NeueHaasDisplay-Roman.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "NeueHaas";
        src: url("../fonts/NeueHaasDisplay-Bold.woff") format("woff");
        font-weight: bold;
        font-style: bold;
        font-display: swap;
    }
    @font-face {
        font-family: "NeueHaas";
        src: url("../fonts/NeueHaasDisplay-Medium.woff") format("woff");
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
