<template>
    <main-layout>
        <template v-slot:header>
            Header
        </template>
        
        <template v-slot:sidebar>
            <album-component 
                v-for="album in albums"
                :key="album.id"
                :album="album"
            />
        </template>

        <template v-slot:content>
            <router-view />
        </template>
    </main-layout>
</template>

<script>
    import MainLayout from './MainLayout.vue';
    import AlbumComponent from './AlbumComponent'
    import {computed, onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        components: {
            MainLayout,
            AlbumComponent
        },
        setup() {
            const store = useStore()
            onMounted(() => {
                store.dispatch('albums/fetch')
            })
            const albums = computed(() => {
                return store.state.albums.all
            })
            const photos = computed(() => {
                return store.state.photos.all
            })
            return {albums, photos}
        }
    }
</script>

<style>
* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
</style>
