<template>
    <div class="col" :class="cssClass">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class Col extends Vue {
    @Prop()
    size: string;

    get cssClass() {
        return `col-${ this.size ?? 'auto' }`;
    }
}

export default Col;
</script>

<style lang="scss">
    $columns: 12;

    .col {
        @for $i from 1 through $columns {
            &.col-#{$i} {
                width: calc(#{(100 * $i / $columns)}vw - var(--col-gap));
            }
        }        
    }
</style>