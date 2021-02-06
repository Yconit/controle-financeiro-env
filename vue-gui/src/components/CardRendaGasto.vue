<template>
    <Card :titulo="titulo">
        <List :data="data">
            <template #item="{item}">
                <Tag :label="item.data" />
                <span>{{ item.label }}</span>
                <Tag :label="`R$ ${ item.valor.toFixed(2) }`" color="secondary" />
            </template>
        </List>
    </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import List from '@/components/List.vue';
import Tag from '@/components/Tag.vue';

@Component({
    components: {
        Card,
        List,
        Tag,
    }
})
class CardRendaGasto extends Vue {
    @Prop()
    data: any[];

    @Prop()
    titulo: string;
}

export default CardRendaGasto;
</script>

<style lang="scss">

</style>