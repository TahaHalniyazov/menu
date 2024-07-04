<template>
        <div class="home-container">
            <h1>Welcome to Our Restaurant</h1>
            <router-link to="/menu-page" class="router-link">View Menu</router-link>
        </div>
</template>
  
<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="sass">
.home-container
    height: 100vh    
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    
  
    color: #fff // Установите цвет текста, чтобы он был видимым на фоне
h1 
    margin-bottom: 20px

.router-link
    color: #fff
    text-decoration: none
    font-size: 1.2em
    padding: 10px 20px
    border: 2px solid #fff
    border-radius: 5px
    &:hover
        background-color: $background-color
   

</style>
