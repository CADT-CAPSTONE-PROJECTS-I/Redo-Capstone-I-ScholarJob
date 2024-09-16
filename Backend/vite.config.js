export default defineConfig({
    plugins: [laravel(['resources/css/app.css', 'resources/js/app.js'])],
    build: {
        manifest: true, 
    },
});
