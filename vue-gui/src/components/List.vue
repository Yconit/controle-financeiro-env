<template>
    <div class="list">
        <div class="list-item" v-for="item in data">
            <slot name="item" :item="item">
                {{ item }}
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class List extends Vue {
    @Prop()
    data: any[];
}

export default List;
</script>

<style lang="scss">
.list {
    --list-border-color: rgb(195,195,195);
    width: 100%;
    height: auto;
    border: 1px solid var(--list-border-color);
    border-radius: 5px;

    .list-item {
        width: 100%;
        padding: 1.3vh 1vw;
        border-bottom: 1px solid var(--list-border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:last-child {
            border-bottom: none;
        }
    }
}
</style>