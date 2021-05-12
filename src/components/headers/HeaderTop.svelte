<script lang="ts">
    import { Link } from "svelte-routing";
</script>

<main>
    <div class="fixed w-full bg-white" id="headerTop">
        <header
            class="container mx-auto my-4 h-16 flex items-center justify-between"
        >
            <Link to="/">
                <div class="">
                    <p class="text-xl sm:text-3xl font-bold">
                        the minimalist journal
                    </p>
                </div>
            </Link>
            <div>
                <Link to="how-it-works">
                    <p class="text-lg inline pr-4">How it works</p>
                </Link>
                <button
                    class="bg-transparent hover:bg-black text-gray-700 font-bold hover:text-white py-1 px-6 border-2 border-gray-500 hover:border-transparent rounded duration-300"
                >
                    Login
                </button>
            </div>
        </header>
    </div>
</main>
