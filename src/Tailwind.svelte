<style global>
    @tailwind base;

    @layer base {
        h1 {
            @apply text-3xl;
        }
        h2 {
            @apply text-2xl;
            @apply font-medium;
            @apply mb-2;
        }
        h3 {
            @apply text-xl;
        }
    }

    @tailwind components;
    @tailwind utilities;
</style>
