<template lang="">
    <PhotoDialog :photo="currentPhoto" v-model="dialogVisible"/>
    <PhotoForm @addPhoto="addPhoto"/>
    <div class="photos-container">
        <Photo v-for="photo in photos" v-bind:key = "photo.id" :photo="photo" @openPhoto="openPhoto"/>
    </div>
</template>
<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import axios from 'axios';

export default {
    components: {
        Photo,
        PhotoForm,
        PhotoDialog
    },
    data: () => ({
        photos: [],
        currentPhoto: {},
        dialogVisible: false
    }),
    mounted() {
        this.fetchPhotos();
    },
    methods: {
        fetchPhotos() {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(responce => this.photos = responce.data)
        },
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

</style>