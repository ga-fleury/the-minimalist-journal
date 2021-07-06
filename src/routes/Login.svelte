<script>
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import Footer from "../components/Footer.svelte";
    import { createEventDispatcher } from "svelte";
    import { navigate } from "svelte-routing";

    const dispatch = createEventDispatcher();

    let imgUsuario;
    let nomeUsuario;

    export let userLogged;

    window.onSignIn = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

        imgUsuario = profile.getImageUrl();
        nomeUsuario = profile.getName();
        dispatch('logou', {
			status_usuario: true,
            nome_usuario: nomeUsuario
		});
        userLogged = true;
        navigate("/dashboard2", { replace: true });
    };
</script>

<svelte:head>
    <title>The Minimalist Journal - Login</title>
</svelte:head>

<main>
    <HeaderTop {userLogged} />

    <div class="meio">
        <div
            class="g-signin2"
            data-onsuccess="onSignIn"
            data-theme="dark"
            data-longtitle="true"
        />
    </div>
    <Footer />
</main>

<style>
    .meio {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }
</style>
