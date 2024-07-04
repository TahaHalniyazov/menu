<template>
        <div class="menu-item">
            <img :src="item.image" alt="item.name" class="menu-item-image" />
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <span>{{ item.price }}</span>
        </div>
</template>
  
<script>
    export default {
        name: 'MenuItem',
            props: {
                item: Object
            }
    }
</script>
  
<style lang="sass">
    .menu-item 
        border: 2px solid #ddd
        padding: 24px
        margin: 8px 0
        display: flex
        flex-direction: column
        align-items: center
        color: $text-color
        
    
    .menu-item-image 
        max-width: 100%
        height: 90%
        margin-bottom: 16px
    @media (max-width: 760px) 
        .menu-item 
            padding: 20px
        .menu-item h3 
            font-size: 1.5em
        .menu-item p 
            font-size: 1em
        .menu-item span 
            font-size: 1em

    @media (max-width: 480px) 
        .menu-item 
            padding: 16px
        .menu-item h3 
            font-size: 1.2em
        .menu-item p 
            font-size: 0.9em
        .menu-item span 
            font-size: 0.9em

    @media (max-width: 360px) 
        .menu-item 
            padding: 12px
        .menu-item h3 
            font-size: 1em
        .menu-item p 
            font-size: 0.8em
        .menu-item span 
            font-size: 0.8em

</style>
  