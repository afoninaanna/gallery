<template lang="">
    <div class="card" style="width: 18rem;" @click="openPhoto">
        <img :src="photo.url" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">{{ photo.title }}</p>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        photo: {
            type: Object,
            requried: true
        }
    },
    methods: {
        ...mapMutations(['setCurrentPhoto', 'showDialog', 'hideDialog']),
        openPhoto() {
            this.setCurrentPhoto(this.photo);
            this.showDialog();
        }
    }
}
</script> 
<style lang="scss" scoped>
    .card {
        margin: 10px;
    }
</style>