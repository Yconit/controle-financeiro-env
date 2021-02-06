<template>
    <div class="card">
        <div class="card-title">
            <slot name="title">
                {{ titulo }}
            </slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class Card extends Vue {
    @Prop()
    titulo: string;
}

export default Card;
</script>

<style lang="scss">
.card {
    min-width: 30vw;
    height: auto;
    box-shadow: 0px 2px 8px 0px rgba(00,00,00,.3);
    border-radius: 30px;
    display: flex;
    flex-flow: column wrap;

    .card-title, .card-body, .card-footer {
        padding: 1.5rem;
    }

    .card-title {
        font-size: 1.7rem;
        text-align: center;
        font-weight: lighter;
    }

    .card-body {
        flex-grow: 2;
    }
}
</style>