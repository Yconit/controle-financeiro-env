<template>
    <span ref="tag" class="tag">
        {{ label }}
    </span>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator';

@Component({})
class Tag extends Vue {
    @Prop({
        required: true
    })
    label: string;

    @Prop({
        default: 'primary'
    })
    color: string;

    @Ref('tag')
    tagElement: HTMLSpanElement;

    mounted() {
        if (this.tagElement) {
            this.tagElement.style.setProperty('--tag-background', `var(--${ this.color }-color)`);
            this.tagElement.style.setProperty('--tag-text-color', `var(--${ this.color }-color-contrast)`);
        }
    }
}

export default Tag;
</script>

<style lang="scss" scoped>
    span.tag {
        display: inline-block;
        background: var(--tag-background);
        padding: .7rem;
        margin: 0 .3vw;
        border-radius: 30px;
        color: var(--tag-text-color);
    }
</style>