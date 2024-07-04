<template>
        <div class="menu">
        <h2>Our Menu</h2>
        <div class="tabs">
            <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="{ active: selectedCategory === category }"
            >
            {{ category }}
            </button>
        </div>
        <div class="menu-items">
            <MenuItem
            v-for="item in filteredMenuItems"
            :key="item.id"
            :item="item"
            />
        </div>
        </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  name: 'Menu',
    components: { MenuItem },
    data() {
        return {
        selectedCategory: 'All',
        categories: ['All', 'Soups', 'Salads', 'Drinks', 'Main Dishes'],
        menuItems: [
            { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: '$12', category: 'Main Dishes', /*image: require('@/assets/images/pizza.jpg')*/ },
            { id: 2, name: 'Pasta', description: 'Pasta with tomato sauce', price: '$10', category: 'Main Dishes', /*image: require('@/assets/images/pizza.jpg')*/ },
            { id: 3, name: 'Chicken Soup', description: 'Hot and tasty chicken soup', price: '$8', category: 'Soups', /*image: require('@/assets/images/pizza.jpg')*/ },
            { id: 4, name: 'Caesar Salad', description: 'Fresh Caesar salad', price: '$7', category: 'Salads', /*image: require('@/assets/images/pizza.jpg')*/ },
            { id: 5, name: 'Coca Cola', description: 'Chilled Coca Cola', price: '$3', category: 'Drinks', /*image: require('@/assets/images/pizza.jpg')*/ },
            
            // Добавьте больше элементов меню
        ]
        }
    },
    computed: {
        filteredMenuItems() {
        if (this.selectedCategory === 'All') {
            return this.menuItems;
        }
        return this.menuItems.filter(item => item.category === this.selectedCategory);
        }
    }
    }
</script>

<style lang="sass">
    .menu 
        padding: 16px
        height: 100vh
    h2 
        color: $text-color
        font-size: 40px
    .tabs 
        display: flex
        justify-content: space-around
        gap: 8px
        margin-bottom: 16px
    
    button 
        padding: 8px 30px
        transition: 0.5s all        
        background-color: transparent
        border: 2px white solid 
        cursor: pointer
        color: white
        border-radius: 6px
        font-family: 'Montserrat'
        &:hover
            background: $background-color

    
    button.active 
        background-color: $background-color
        color: white
    
    .menu-items 
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
        gap: 16px
    @media (max-width: 760px)
        .tabs 
            justify-content: center
            flex-wrap: wrap
            align-items: center
        .menu-items 
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))

    @media (max-width: 480px)
        h2 
            font-size: 30px
        button 
            padding: 6px 20px
        .menu-items 
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))

    @media (max-width: 360px)
        h2 
            font-size: 24px
        button 
            padding: 4px 15px
        .menu-items 
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))

</style>
