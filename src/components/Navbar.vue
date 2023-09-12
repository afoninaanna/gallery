<template lang="">
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <router-link to="/" class="nav-link active" aria-current="page" href="#">Главная</router-link>
                <router-link to="/photo" class="nav-link" href="#">Фотографии</router-link>
                </div>
            </div>
        </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>