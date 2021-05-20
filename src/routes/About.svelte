<script>
    import AboutMain from "../components/AboutMain.svelte";
    import Header from "../components/headers/Header.svelte";
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import Footer from "../components/Footer.svelte";
    import { fade } from 'svelte/transition';
</script>

<main>
    <Header />
    <HeaderTop />
    <div in:fade>
        <AboutMain />
    </div>
    <Footer />
</main>

<style>
</style>
