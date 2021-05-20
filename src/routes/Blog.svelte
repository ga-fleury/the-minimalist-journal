<script>
    import HeaderBlog from "../components/headers/HeaderBlog.svelte";
    import HeaderTopBlog from "../components/headers/HeaderTopBlog.svelte";
    import BlogPost from "../components/BlogPost.svelte";
    import FooterBlog from "../components/FooterBlog.svelte";
    import { posts } from "../posts";

    import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Blog | The Minimalist Journal</title>
</svelte:head>

<main>
    <HeaderBlog />
    <HeaderTopBlog />

    <div class="py-64 container mx-auto px-2 pb-36 min-h-95/100" in:fade>
        <!-- iterate through each post -->
        <p class="text-gray-400" style="padding-bottom: 0;">click on post title / date to expand.</p>
        {#each posts as post}
            <BlogPost
                title={post.title}
                date={post.finalDate}
                html={post.html}
            />
        {/each}
    </div>
    <FooterBlog />
</main>
