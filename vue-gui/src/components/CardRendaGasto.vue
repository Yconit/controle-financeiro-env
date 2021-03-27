<template>
    <Card :titulo="titulo">
        <List :data="data">
            <template #item="{item}">
                <Tag :label="formatedDate(item.data)" />
                <span>{{ item.label }}</span>
                <Tag :label="`R$ ${ format(item.valor) }`" color="secondary" />
            </template>
        </List>

        <Button @click="btnClickHandle($event)" color="instagram" label="Adicionar"/>

        <Modal ref="modal_cadastro" :title="`Cadastro de ${ titulo }`">
            <Input label="Data" :id="`data-${ id }`" type="date" v-model="item.data" />
            <Input label="Descrição" :id="`descricao-${ id }`" type="text" maxlength="109" :helpText="`${ item.label.length }/109`" v-model="item.label" />
            <Input label="Valor" type="number" v-model.number="item.valor" :id="`valor-${ id }`"/>

            <template #footer>
                <Button @click="adicionaItem" label="Adicionar" />
            </template>
        </Modal>
    </Card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import List from '@/components/List.vue';
import Tag from '@/components/Tag.vue';
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
import Input from '@/components/Input.vue';
import axios from 'axios';
import moment from 'moment';

@Component({
    components: {
        Card,
        List,
        Tag,
        Button,
        Modal,
        Input
    },
    model: {
        prop: 'data',
        event: 'adiciona-item'
    }
})
class CardRendaGasto extends Vue {
    @Prop()
    data: any[];

    @Prop()
    titulo: string;

    @Ref('modal_cadastro')
    modalCadastro: Modal;

    id: number = Math.ceil(Math.random() * 1000);

    item: { data?: string, label?: string, valor?: number } = {
        label: ''
    };

    btnClickHandle(event: any) {
        this.modalCadastro.show();
    }

    @Emit()
    async adicionaItem() {
        const res = await axios.post('http://localhost:8080/movimentacoes', {
            ...this.item,
            data: moment(this.item.data, 'YYYY-MM-DD'),
            tipo: this.titulo === 'Gastos' ? 'gasto' : 'renda'
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        this.data.push(this.item);
        this.item = {
            label: ''
        };

        this.modalCadastro.hide();

        return this.data;
    }

    format(value: number, decimalLength = 2, decimal = ',', milhar = '.') {
        return value.toFixed(decimalLength).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`).replace('.', decimal);
    }

    formatedDate(date: string) {
        return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    }
}

export default CardRendaGasto;
</script>

<style lang="scss">

</style>