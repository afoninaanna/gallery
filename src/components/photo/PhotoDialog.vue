<template lang="">
    <div class="modal" tabindex="-1" :class="{close : !dialogVisible}" @click="closeDialog"> 
        <div class="card">
            <img :src="photo.url" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">{{ photo.title }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        photo: {
            type: Object,
            required: true
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.dialogVisible = this.modelValue;
    },
    data() {
        return {
           dialogVisible: false
        }
    },
    watch: {
        modelValue(newValue) {
            this.dialogVisible = newValue;
        },
        dialogVisible(newValue) {
            this.$emit('update:modelValue', newValue);
        }
    },
    methods: {
        closeDialog() {
            this.dialogVisible = false;
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