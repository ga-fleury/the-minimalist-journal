<script>
    import Header from "../components/headers/Header.svelte";
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import Footer from "../components/Footer.svelte";

    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }

</script>

<svelte:head>
	<title>The Minimalist Journal - Login</title>
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="778317955926-7l1qmv0n5ivat2c1vvpsccsn5oh2v4r9.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>

</svelte:head>

<main>
    <Header />
    <HeaderTop />
    <div class="g-signin2" data-onsuccess="{onSignIn}" data-theme="dark"  data-longtitle="true"></div>
    <Footer />
</main>

<style>
</style>