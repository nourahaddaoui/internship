<template>

    <a-page-header :title="$t('edit')"/>



    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">

        <a-form-item :label="$t('name')" :rules="[{ required: true, message: 'Please input server name!' }]">
            <a-input v-model:value="formState.name" />
        </a-form-item>


        <a-form-item :label="$t('status')" name="delivery">
            <a-switch v-model:checked="formState.status" />
        </a-form-item>


        <a-form-item :label="$t('description')"
            :rules="[{ required: true, message: 'Please input server description!' }]">
            <a-textarea v-model:value="formState.description" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">Save</a-button>
            <NuxtLink :to="localePath('/server')">
                <a-button style="margin-left: 10px">{{ $t('cancel') }}</a-button>
            </NuxtLink>
        </a-form-item>

    </a-form>
</template>



<script lang="ts" setup>
const route = useRoute()
console.log("route params  : ",route.params)

interface formState {
    name: string;
    status: boolean;
    description: string;
}
const formState = reactive({
    name: '',
    status: false,
    description: '',
});

const onSubmit = () => {
    console.log('submit!', toRaw(formState));
};
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const localePath = useLocalePath()
</script>

<style scoped>
:deep(.ant-col.ant-form-item-label.css-dev-only-do-not-override-19iuou) {
    text-align: start;
}
</style>
