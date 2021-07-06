<script lang="ts">
    import { Link } from "svelte-routing";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";

    export let userLogged;

    function handleLogout() {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            console.log("user signed out sucessfully");
            userLogged.status = false;
            navigate("/", { replace: true });
        });
    }

    let show = false; // menu state
    let menu = null; // menu wrapper DOM reference

    onMount(() => {
        const handleOutsideClick = (event) => {
            if (show && !menu.contains(event.target)) {
                show = false;
            }
        };

        const handleEscape = (event) => {
            if (show && event.key === "Escape") {
                show = false;
            }
        };

        // add events when element is added to the DOM
        document.addEventListener("click", handleOutsideClick, false);
        document.addEventListener("keyup", handleEscape, false);

        // remove events when element is removed from the DOM
        return () => {
            document.removeEventListener("click", handleOutsideClick, false);
            document.removeEventListener("keyup", handleEscape, false);
        };
    });
</script>

<svelte:head>
    <meta name="google-signin-scope" content="profile email" />
    <meta
        name="google-signin-client_id"
        content="778317955926-8n8ftnvqnetk3fqvvni56pfgf6rehdq7.apps.googleusercontent.com"
    />
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script
        src="https://apis.google.com/js/platform.js?onload=onLoadCallback"
        async
        defer></script>
</svelte:head>

<div class="fixed w-full px-2 bg-white" id="headerTop">
    <header
        class="container mx-auto my-4 h-16 flex items-center justify-between m-2"
    >
        <Link to="/">
            <div class="">
                <p class="text-xl sm:text-3xl font-bold pl-4">
                    the minimalist journal
                </p>
            </div>
        </Link>
        <div class="pr-4">
            <Link to="blog">
                <p class="text-base sm:text-lg inline pr-4">Blog</p>
            </Link>
            {#if !userLogged.status}
                <Link to="login">
                    <button
                        class="text-sm sm:text-base bg-transparent hover:bg-black text-gray-700 font-bold hover:text-white py-1 px-6 border-2 border-gray-500 hover:border-transparent rounded duration-300"
                    >
                        Login
                    </button>
                </Link>
            {/if}
            {#if userLogged.status}
                <div class="relative" style="display:inline;" bind:this={menu}>
                    <div style="display:inline;">
                        <button
                            on:click={() => (show = !show)}
                            class="menu text-sm sm:text-base bg-transparent hover:bg-black text-gray-700 font-bold hover:text-white py-1 px-6 border-2 border-gray-500 hover:border-transparent rounded duration-300"
                            style="display:inline;"
                        >
                            Hello {userLogged.stname}
                        </button>

                        {#if show}
                            <div
                                class="origin-top-right absolute right-0 w-48 py-2 mt-1 
                        shadow-md text-right"
                            >
                                <Link to="dashboard2">
                                    <span
                                        href=""
                                        class="block px-4 py-2 hover:bg-gray-900 hover:text-white"
                                        >Dashboard</span
                                    >
                                </Link>
                                <span
                                    class="block px-4 py-2 hover:bg-gray-900 hover:text-white"
                                    on:click={handleLogout}>Logout</span
                                >
                                <span
                                    class="block px-4 py-2 hover:bg-gray-900 hover:text-white"
                                    >Settings</span
                                >
                            </div>
                        {/if}
                    </div>
                </div>
            {/if}
        </div>
    </header>
</div>

<style>
    .dropdown-menu {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 100px;
    }
</style>
