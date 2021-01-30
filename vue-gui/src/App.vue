<template>
    <div id="app">
        <Menu />
        <router-view />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Menu from "@/components/Menu.vue";

    @Component({
        components: {
            Menu
        }
    })
    class App extends Vue {}

    export default App;
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&family=Satisfy&display=swap');

    :root {
        --font-family-default: 'Quicksand', sans-serif;
        
        // Temas
        --primary-color: rgb(219, 36, 36);
        --primary-color-contrast: rgb(255, 255, 255);
        --primary-color-dark: rgb(146, 21, 21);
        --primary-color-light: rgb(245, 96, 96);
        --primary-color-light-contrast: rgb(00, 00, 00);
        
        --secondary-color: rgb(14, 110, 189);
        --secondary-color-contrast: rgb(255, 255, 255);
        --secondary-color-dark: rgb(18, 66, 105);
        --secondary-color-light: rgb(72, 143, 200);
        --secondary-color-light-contrast: rgb(00, 00, 00);

        --instagram-color: rgb(239,71,111);
        --instagram-color-contrast: rgb(255, 255, 255);
        --instagram-color-dark: rgb(161, 33, 63);
        --instagram-color-light: rgb(243, 128, 155);
        --instagram-color-light-contrast: rgb(00, 00, 00);
    }

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: var(--font-family-default);
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
</style>
