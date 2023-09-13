<template lang="">
    <div class="card" style="width: 18rem;">
        <img :src="photo.url" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">{{ photo.title }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        photo: {
            type: Object,
            requried: true
        }
    }
}
</script> 
<style lang="scss" scoped>
    .card {
        margin: 10px;
    }
</style>