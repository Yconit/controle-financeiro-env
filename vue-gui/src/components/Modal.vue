<template>
    <div ref="modal" :id="id" class="modal" :class="modalClassConfig" @click.self="hide">
        <div class="modal-content">
            <div class="modal-title">
                <slot name="title">
                    {{ title }} <a @click="hide" class="modal-close">&times;</a>
                </slot>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component({})
class Modal extends Vue {
    @Prop()
    id: string|undefined;

    @Prop()
    title: string|undefined;

    @Prop()
    size: string|undefined;

    @Ref('modal')
    modal: HTMLDivElement|undefined;

    get modalClassConfig() {
        return `modal-${ this.size ?? 'md' }`;
    }

    show() {
        if (this.modal) {
            this.modal.style.visibility = 'visible';
            this.modal.style.opacity = '1';
            this.modal.style.pointerEvents = 'auto';
        }
    }

    hide() {
        if (this.modal) {
            this.modal.style.visibility = 'hidden';
            this.modal.style.opacity = '0';
            this.modal.style.pointerEvents = 'none';
        }
    }
}

export default Modal;
</script>

<style lang="scss">
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(00,00,00,.1);

        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s;

        & > .modal-content {
            background: rgb(255,255,255);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0px 0px 27px 4px rgba(00,00,00,.1);
            display: flex;
            flex-flow: column wrap;

            & > .modal-title {
                font-size: 2rem;
                font-weight: 300;
                margin-bottom: 4vh;

                & > .modal-close {
                    float: right;
                    color: rgb(154 154 154);
                    cursor: pointer;
                    text-decoration: none;
                }
            }

            & > .modal-body {
                flex-grow: 2;
            }
        }

        &.modal-sm > .modal-content {
            width: 25vw;
            min-height: 30vh;

            & > .modal-title {
                margin-bottom: 1vh;
            }
        }

        &.modal-md > .modal-content {
            width: 45vw;
            min-height: 50vh;

            & > .modal-title {
                margin-bottom: 2vh;
            }
        }

        &.modal-lg > .modal-content {
            width: 70vw;
            min-height: 70vh;
        }
    }
</style>