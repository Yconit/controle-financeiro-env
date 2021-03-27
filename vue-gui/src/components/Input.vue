<template>
    <div>
        <label :for="id">{{ label }}</label>
        <input :type="type" :id="id" :name="name" :value="value" :maxlength="maxlength" @input="input">

        <p class="text-right" v-if="helpText">{{ helpText }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
    model: {
        prop: 'value',
        event: 'input'
    }
})
class Input extends Vue {
    @Prop({
        required: true
    })
    id: string;

    @Prop()
    label: string;

    @Prop()
    name: string;

    @Prop()
    value: any;

    @Prop({
        default: 'text'
    })
    type: string;

    @Prop()
    maxlength: number;

    @Prop()
    helpText: string;

    @Emit()
    input(e: any) {
        return e.target.value;
    }
    
    @Emit()
    keyUp(e: any) {
        return e.target.value;
    }
}

export default Input;
</script>

<style lang="scss" scoped>

</style>