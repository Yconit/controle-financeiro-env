<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
class Row extends Vue {

}

export default Row;
</script>

<style lang="scss">
    .row {
        width: 100vw;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 2rem;
        margin: 3vh 0;
    }
</style>