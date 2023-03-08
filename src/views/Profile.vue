<template>
    <div class="row">
        <div class="col offset-md" style="background-color: red;">
            aaaaa
        </div>
        <div class="col-md-2">
            <Sidebar />
        </div>
            
    </div>
    
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
    name: 'Profile',
    components: {
        Sidebar
    },
    setup() {

    }
}
</script>

<style></style>