import axios from 'axios';

export default {
    state: {
        photo: [],
        dialogVisible: false,
        currentPhoto: {}
    },
    mutations: {
        setPhotos(state, payload) {
            state.photo = payload;
        },
        showDialog(state) {
            state.dialogVisible = true;
        },
        hideDialog(state) {
            state.dialogVisible = false;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        }
    },
    getters: {
        getAllPhotos(state) {
            return state.photo;
        },
        getDialogVisible(state) {
            return state.dialogVisible;
        },
        getCurrentPhoto(state) {
            return state.currentPhoto;
        }
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(responce => context.commit('setPhotos', responce.data));
        }
    }
}