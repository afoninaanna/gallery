<template lang="">
    <PhotoForm @addPhoto="addPhoto "/>
    <div class="photos-container">
        <Photo v-for="photo in photos" :photo="photo"/>
    </div>
</template>
<script>
import Photo from "@/components/photo/Photo";
import PhotoForm from "@/components/photo/PhotoForm";
import axios from 'axios';
export default {
    components: {
        Photo,
        PhotoForm
    },
    data: () => ({
        photos: []
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