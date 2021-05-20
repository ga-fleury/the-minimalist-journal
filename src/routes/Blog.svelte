<script>
    import HeaderBlog from "../components/headers/HeaderBlog.svelte";
    import HeaderTopBlog from "../components/headers/HeaderTopBlog.svelte";
    import BlogPost from "../components/BlogPost.svelte";
    import { posts } from "../posts";



    console.log(posts);
    console.log(posts.finalDate);
</script>

<main>
    <HeaderBlog />
    <HeaderTopBlog />

    <div class="py-64 container mx-auto h-screenh px-2">
        <!-- iterate through each post -->
        <p class="text-gray-400">click on post title to expand.</p>
        {#each posts as post}
            <BlogPost
                title={post.title}
                date={post.finalDate}
                html={post.html}

            />
        {/each}
    </div>
</main>
