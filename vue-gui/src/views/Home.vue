<template>
    <div>
        <div class="align-center">
            <Tag label="Rendas"/>
            <Tag label="Gastos" color="secondary"/>
            <Tag label="Disponível" color="instagram"/>
        </div>

        <Row>
            <Col>
                <Alert titulo="Parabéns!" mensagem="Você está indo bem! Continue assim e no final vai ta ricão." />
            </Col>
        </Row>

        <Row>
            <Col :size="6">
                <CardRendaGasto titulo="Rendas" :data="rendas" />
            </Col>
            <Col :size="6">
                <CardRendaGasto titulo="Gastos" :data="gastos" />
            </Col>
        </Row>
    </div>
</template>

<script lang="ts">
import {  Component, Vue } from "vue-property-decorator";
import Tag from '@/components/Tag.vue';
import Alert from '@/components/Alert.vue';
import Row from '@/components/Row.vue';
import Col from '@/components/Col.vue';
import CardRendaGasto from '@/components/CardRendaGasto.vue';

@Component({
    components: {
        Tag,
        Alert,
        Row,
        Col,
        CardRendaGasto
    }
})
class Home extends Vue {
    get rendas() {
        return [
            {
                data: "01/02/2021",
                label: "Pagamento de Salário",
                valor: 5500
            },
            {
                data: "03/02/2021",
                label: "Acerto de Dívida do Joel",
                valor: 350
            },
            {
                data: "05/02/2021",
                label: "Dinheiro de não sei quem",
                valor: 850
            }
        ];
    }

    get gastos() {
        return [
            {
                data: "02/02/2021",
                label: "Conta de Energia",
                valor: 500
            },
            {
                data: "03/02/2021",
                label: "Conta de água",
                valor: 350
            },
            {
                data: "05/02/2021",
                label: "Conta da Internet",
                valor: 1500
            }
        ];
    }
}

export default Home;
</script>

<style lang="scss">
    .align-center {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
</style>
