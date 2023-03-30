<template>
    <div class="container" style="padding: 10px;">
        <div class="row">
            <div class="col-md-6 col-lg-3 mb-4">
                <Card />
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <Card />
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <Card />
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <Card />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Deck',
    components: {
        Card
    }
})
</script>

<style></style>