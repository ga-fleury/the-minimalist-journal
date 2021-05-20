<script lang="ts">
    import { Link } from "svelte-routing";
</script>

<div class="fixed w-full px-2 bg-white" id="headerTop">
    <header
        class="container mx-auto my-4 h-16 flex items-center justify-between m-2"
    >
        <Link to="/">
            <div class="">
                <p class="text-xl sm:text-3xl font-bold">
                    min.journal <span class="font-normal"
                        >&nbsp; / &nbsp; blog</span
                    >
                </p>
            </div>
        </Link>
        <div>
            <Link to="/">
                <button
                    class="text-sm sm:text-base bg-transparent hover:bg-black text-gray-700 font-bold hover:text-white py-1 px-6 border-2 border-gray-500 hover:border-transparent rounded duration-300"
                >
                    Back to site
                </button>
            </Link>
        </div>
    </header>
</div>
