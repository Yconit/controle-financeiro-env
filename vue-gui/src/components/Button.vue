<template>
    <button ref="btn" @click="click($event)" :type="type" class="btn">{{ label }}</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator';

@Component({})
class Button extends Vue {
    @Prop()
    label: string;

    @Prop({
        default: 'button'
    })
    type: string;

    @Prop({
        default: 'primary'
    })
    color: string;

    @Ref('btn')
    btnElement: HTMLButtonElement;

    @Emit()
    click(event: any) {
        return event;
    }

    mounted() {
        if (this.btnElement) {
            this.btnElement.style.setProperty('--btn-text', `var(--${ this.color }-color-contrast)`);
            this.btnElement.style.setProperty('--btn-background', `var(--${ this.color }-color)`);
            this.btnElement.style.setProperty('--btn-text-hover', `var(--${ this.color }-color-contrast)`);
            this.btnElement.style.setProperty('--btn-background-hover', `var(--${ this.color }-color-dark)`);
        }
    }
}

export default Button;
</script>

<style lang="scss" scoped>
    button.btn {
        --btn-text: var(--primary-color-contrast);
        --btn-background: var(--primary-color);
        --btn-text-hover: var(--primary-color-contrast);
        --btn-background-hover: var(--primary-color-dark);

        padding: 1rem 1.5rem;
        border-radius: 30px;
        border: 1px solid var(--btn-background);
        outline: none;
        font-size: 1rem;
        margin: 1vh 1vw;
        color: var(--btn-text);
        background: var(--btn-background);
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            color: var(--btn-text-hover);
            background: var(--btn-background-hover);
        }
    }
</style>