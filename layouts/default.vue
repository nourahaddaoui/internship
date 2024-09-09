<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">

                <a-menu-item key="1">
                    <NuxtLink :to="localePath('/')">
                        <HomeOutlined />
                        <span>{{ $t('home') }}</span>
                    </NuxtLink>
                </a-menu-item>

                <a-menu-item key="2">
                    <NuxtLink :to="localePath('/server')">
                        <CloudServerOutlined />
                        <span>{{ $t('servers') }}</span>
                    </NuxtLink>

                </a-menu-item>

                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <FlagOutlined />
                            <span>{{ $t('language') }}</span>
                        </span>
                    </template>

                    <a-menu-item key="3" @click="setLocale('en')">{{$t('english') }}</a-menu-item>

                    <a-menu-item key="4" @click="setLocale('fr')">{{ $t('french') }}</a-menu-item>
                    ]

                </a-sub-menu>

            </a-menu>
        </a-layout-sider>

        <a-layout>
            <a-layout-content style="margin: 0 16px">

                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    <slot />
                </div>


            </a-layout-content>
            <a-layout-footer style="text-align: center">
                {{ $t('footer') }}
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>



<script lang="ts" setup>
const { locale, setLocale } = useI18n()

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const localePath = useLocalePath()
</script>


<style scoped>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>

<style>
body {
    margin: 0;
}
</style>
