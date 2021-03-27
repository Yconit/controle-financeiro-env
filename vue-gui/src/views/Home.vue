<template>
    <div>
        <div class="align-center">
            <Tag :label="`Rendas ${ totalRendas.toFixed(2) }`"/>
            <Tag :label="`Gastos ${ totalGastos.toFixed(2) }`" color="secondary"/>
            <Tag :label="`Disponível ${ totalDisponivel.toFixed(2) }`" color="instagram"/>
        </div>

        <Row>
            <Col>
                <Alert titulo="Parabéns!" mensagem="Você está indo bem! Continue assim e no final vai ta ricão." />
            </Col>
        </Row>

        <Row>
            <Col :size="6">
                <CardRendaGasto titulo="Rendas" v-model="rendas" />
            </Col>
            <Col :size="6">
                <CardRendaGasto titulo="Gastos" v-model="gastos" />
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
import axios from "axios";

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
    rendas = [
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

    gastos = [
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

    get totalGastos() {
        return this.gastos.map((i) => i.valor).reduce((acumulado, current) => acumulado + current);
    }

    get totalRendas() {
        return this.rendas.map((i) => i.valor).reduce((acumulado, current) => acumulado + current);
    }

    get totalDisponivel() {
        return this.totalRendas - this.totalGastos;
    }

    async created() {
        const movimentacoes: { data: string; label: string; valor: number; tipo: string; }[] = (await axios.get('http://localhost:8080/movimentacoes')).data;

        this.gastos = movimentacoes.filter((item) => item.tipo === 'GASTO');
        this.rendas = movimentacoes.filter((item) => item.tipo === 'RENDA');
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
