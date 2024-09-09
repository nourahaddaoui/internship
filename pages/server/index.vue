<template>

    <a-page-header :title="$t('list')">
    </a-page-header>

    <NuxtLink :to="localePath('/server/addserver')">
        <a-button type="primary">{{ $t('add') }}</a-button>
    </NuxtLink>



    <a-table :columns="columns" :data-source="data">


        <template #bodyCell="{ column, record, index }">

            <template v-if="column.key === 'tags'">
                <span>
                    <a-tag v-if="record.isActive" color='green'>
                        {{ $t('active') }}
                    </a-tag>

                    <a-tag v-else color='blue'>
                        {{ $t('inactive') }}
                    </a-tag>
                </span>
            </template>




            <template v-if="column.key === 'action'">
                <span>
                        <a @click="navigateTo(localePath ({name:'server-id', params: { id: record.id } }))">{{ $t('edit') }}</a>
                    <a-divider type="vertical" />
                    <a>
                        <a-popconfirm :title="$t('titlePop')" :ok-text="$t('yes')" :cancel-text="$t('no')"
                            @confirm="confirm(record.id)">
                            <a href="#">{{ $t('delete') }}</a>
                        </a-popconfirm>
                    </a>

                </span>
            </template>

        </template>
    </a-table>
</template>




<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue';
import { notification } from 'ant-design-vue';
import { useStore } from "@/stores/useStore";

const localePath = useLocalePath();
const i18n = useI18n();

const store = useStore();
const data = computed(()=> {
    return store.servers
})

onMounted( () => {
     store.useFetchServers();
});

const columns = ref<TableColumnsType>([
    {
        title: i18n.t("serverId"),
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: i18n.t("name"),
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: i18n.t("description"),
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: i18n.t("status"),
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: i18n.t("action"),
        key: 'action',
    },
]);


const openNotificationWithIcon = (type: string) => {
    notification[type]({
        message: i18n.t('successDelete'),
    });
};

const confirm = (recordIndex:string) => {
    openNotificationWithIcon('success')
    store.useDeleteServer(recordIndex);
};

</script>