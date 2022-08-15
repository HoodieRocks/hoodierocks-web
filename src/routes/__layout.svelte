<script>
    import { dark } from '../stores';

    import '../app.css';
    import Navigation from '../components/Navigation.svelte';
    import Footer from '../components/Footer.svelte';

    // TODO: add dark/light color changes + button
    let isDark = false;
    dark.subscribe((v) => (isDark = v));
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div id="top" />
<Navigation />
<slot />
<Footer />
