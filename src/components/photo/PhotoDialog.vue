<template lang="">
    <div class="modal" tabindex="-1" :class="{close : !$store.getters.getDialogVisible}" @click="closeDialog"> 
        <div class="card">
            <img :src="$store.getters.getCurrentPhoto.url" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">{{ full_title }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    methods: {
        closeDialog() {
            this.$store.commit('hideDialog');
        }
    },
    computed: {
        full_title() {
            return `Название фотографии - ${this.$store.getters.getCurrentPhoto.title}`;
        }
    }
}
</script>
<style lang="scss" scoped>
    .modal {
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .card {
        width: 500px;
        height: 600px;
    }
    .close {
        display: none;
    }
</style>