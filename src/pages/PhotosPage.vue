<template lang="">
    <PhotoDialog/>
    <PhotoForm v-if="this.photos.length < 11" @addPhoto="addPhoto"/>
    <div v-else  class="warning">Вы не можете загрузить больше фотографий</div>
    <div class="photos-container">
        <Photo v-for="photo in $store.getters.getAllPhotos" v-bind:key = "photo.id" :photo="photo"/>
    </div>
</template>
<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import { mapActions } from 'vuex';

export default {
    components: {
        Photo,
        PhotoForm,
        PhotoDialog
    },
    data: () => ({
        photos: [],
        // currentPhoto: {},
        // dialogVisible: false
    }),
    mounted() {
        // this.fetchPhotos();
        this.fetchPhotos();
    },
    methods: {
        ...mapActions(['fetchPhotos']),
        // fetchPhotos() {
        //     axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        //         .then(responce => this.photos = responce.data)
        // },
        addPhoto(photo) {
            this.photos.push(photo);
        },
        openPhoto(photo) {
            this.currentPhoto = photo;
            this.dialogVisible = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    .photos-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .warning {
        text-align: center;
        font-size: 26px;
        padding-top: 20px;
    }

</style>