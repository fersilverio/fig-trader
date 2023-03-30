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

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'Deck',
    components: {
        Card
    }
}
</script>

<style></style>