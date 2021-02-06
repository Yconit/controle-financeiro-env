<template>
    <div class="alert">
        <slot name="titulo">
            <h3>{{ titulo }}</h3>
        </slot>

        <slot>
            <p>{{ mensagem }}</p>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class Alert extends Vue {
    @Prop()
    titulo: string;

    @Prop()
    mensagem: string;
}

export default Alert;
</script>

<style lang="scss">
    .alert {
        height: auto;
        padding: 2rem;
        border: 1px solid var(--primary-color);
        border-left-width: 3px;
        border-radius: 5px;

        h3 {
            font-size: 2rem;
            margin: 1vh 0;
        }
    }
</style>