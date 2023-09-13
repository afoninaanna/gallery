<template lang="">
    <div class="mb-3 row">
        <div class="col-auto">
            <input type="text" v-model="title" class="form-control" id="inputText" placeholder="Введите название фотографии">
        </div>
        <div class="col-auto">
            <input type="file" @change="onFileChange" class="form-control" id="inputFile">
        </div>
        <div class="col-auto">
            <button @click="addPhoto" type="submit" class="btn btn-primary mb-3">Добавить</button>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        title: '',
        img: null
    }),
    methods: {
        onFileChange(event) {
            this.img = event.target.files[0];
        },
        addPhoto() {
            const reader = new FileReader();
            reader.onload = () => {
                let photo = {
                    id: Date.now(),
                    title: this.title,
                    url: reader.result
                }
                this.$emit('addPhoto', photo);
            }
            reader.readAsDataURL(this.img);
        }
    }
}
</script>
<style lang="scss" scoped>
    .mb-3 {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        align-items: center;
    }
    #inputText {
        width: 300px;
        text-align: center;
    }
    .btn {
        margin: 14px 0;
    }
</style>