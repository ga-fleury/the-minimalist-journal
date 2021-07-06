<script>
    import AboutMain from "../components/AboutMain.svelte";
    import Header from "../components/headers/Header.svelte";
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import Footer from "../components/Footer.svelte";
    import { fade } from 'svelte/transition';

    export let userLogged;
</script>

<main>
    <Header {userLogged} />
    <HeaderTop {userLogged} />
    <div in:fade>
        <AboutMain />
    </div>
    <Footer />
</main>

<style>
</style>
