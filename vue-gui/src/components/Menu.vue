<template>
    <nav>
        <p>Batata</p>
    </nav>
</template>

<style lang="scss" scoped>
    @mixin textShadow($tamanho) {
        text-shadow: 0px 2px $tamanho rgba(255, 255, 255, 0.5),
                         0px 2px $tamanho + 4 rgba(255, 255, 255, 0.5),
                         0px 2px $tamanho + 6 rgba(255, 255, 255, 0.5);
    }

    @keyframes piscaPisca {
        $rotateDeg: 100deg;

        0% {
            text-shadow: none;
            transform: rotate(0deg);
            transform: scale(1);
        }
        25% {
            transform: rotate($rotateDeg);
            transform: scale(1.5);
        }
        50% {
            @include textShadow(20px);
            transform: rotate(0deg);
            transform: scale(2);
        }
        75% {
            transform: rotate($rotateDeg * -1);
            transform: scale(1.5);
        }
        100% {
            text-shadow: none;
            transform: rotate(0deg);
            transform: scale(1);
        }

    }

    nav {
        width: 100vw;
        height: 5vh;
        background: var(--primary-color);
        color: var(--primary-color-contrast);
        font-family: 'Satisfy', cursive;
        font-size: 1.9rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        margin-bottom: 3vh;

        p {
            animation: piscaPisca;
            animation-duration: 4s;
            animation-iteration-count: infinite;
        }
    }
</style>