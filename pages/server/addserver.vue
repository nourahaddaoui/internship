<template>

    <a-page-header :title="$t('add')" />

    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" @finish="onSubmit()">

        <a-form-item name="name" :label="$t('name')" :rules="[{ required: true, message: 'Please input server name!' }]">
            <a-input 
            v-model:value="formState.name" 
            />
        </a-form-item>


        <a-form-item :label="$t('status')" name="status">
            <a-switch v-model:checked="formState.status" />
        </a-form-item>


        <a-form-item name="description" :label="$t('description')"
            :rules="[{ required: true, message: 'Please input server description!' }]">
            <a-textarea v-model:value="formState.description" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">


                <a-button type="primary" html-type="submit">{{ $t('create') }}</a-button>


            <NuxtLink :to="localePath('/server')">
                <a-button style="margin-left: 10px">{{ $t('cancel') }}</a-button>
            </NuxtLink>


        </a-form-item>

    </a-form>
</template>



<script lang="ts" setup>
const store = useStore();
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const localePath = useLocalePath()

interface FormState {
    name: string;
    status: boolean;
    description: string;
}
const formState: FormState = reactive({
    name: '',
    status: false,
    description: '',
});

const onSubmit = () => {
    store.useAddServer(formState)
    navigateTo(localePath('/server')); 
};

</script>

<style scoped>
:deep(.ant-col.ant-form-item-label.css-dev-only-do-not-override-19iuou) {
    text-align: start;
}
</style>
