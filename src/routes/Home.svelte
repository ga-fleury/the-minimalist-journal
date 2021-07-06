<script>
    import Hero from "../components/Hero.svelte"
    import Header from "../components/headers/Header.svelte";
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import Footer from "../components/Footer.svelte";
    import { fade } from 'svelte/transition';

    export let userLogged;
</script>

<svelte:head>
	<title>The Minimalist Journal</title>
</svelte:head>

<main>
    <Header {userLogged} />
    <HeaderTop {userLogged} on:logou />
    <div in:fade>
        <Hero />
    </div>
    <Footer />
</main>

<style>
</style>