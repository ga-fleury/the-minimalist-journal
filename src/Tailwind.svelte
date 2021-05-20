<style global>
    @tailwind base;

    @layer base {
        h1 {
            @apply text-4xl;
        }
        h2 {
            @apply text-3xl;
            @apply font-bold;
            @apply mb-6;
        }
        h3 {
            @apply text-2xl;
        }
        p { 
            @apply pb-4
        }
    }

    @tailwind components;
    @tailwind utilities;
</style>
