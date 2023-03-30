

<template>
    <div style="display: grid;">

    </div>
    <div class="card" style="width: 18rem; height: 30rem;">
        <img src="@/assets/GuardiaoCelta.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Guerreiro Guardião Celta</h5>
            <p class="card-text">Um elfo que aprendeu a empunhar uma espada e confunde os inimigos com ataques relâmpagos.</p>
            <div class="row">
                <div class="col-sm-6">
                    <div class="row">
                        <span>ATK: 1400</span>
                    </div>
                    <div class="row">
                        <span>DEF: 1200</span>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <span>ELE: Earth</span>
                    </div>
                    <div class="row">
                        <span>WPN: Sword</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'Card'
})
</script>

<style></style>