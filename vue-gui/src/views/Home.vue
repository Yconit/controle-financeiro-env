<template>
    <div>
        <Tag label="Rendas"/>
        <Tag label="Gastos" color="secondary"/>
        <Tag label="Disponível" color="instagram"/>
        <h1>Olá Mundo! | Hello World</h1>
    </div>
</template>

<script lang="ts">
import {  Component, Vue } from "vue-property-decorator";
import Tag from '@/components/Tag.vue';

@Component({
    components: {
        Tag
    }
})
class Home extends Vue {

}

export default Home;
</script>

<style lang="scss">

</style>
