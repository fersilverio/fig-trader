<template>
    <div class="row component-core">
        <div style="height: 100%;">
            <div class="side-core">
                <a @click="emitChoice(1)" class="nav-link custom-nav p-3 custom-navlink-positioning">Resumo</a>
                <a @click="emitChoice(2)" class="nav-link custom-nav p-3 custom-navlink-positioning">Amigos</a>
                <a @click="emitChoice(3)" class="nav-link custom-nav p-3 custom-navlink-positioning">Cartas</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',

    data(){
        return{
            option: 0
        }
    },

    methods: {
        emitChoice(choice) {
            this.option = choice
            let toBeSent = this.option
            this.$emit('sidebar-choice', toBeSent)
        }
    }

}
</script>

<style scoped>

.custom-nav:hover {
    background-color: rgba(45, 22, 197, 0.869);
    border: 1px solid rgba(0, 0, 0, 0.165);
    padding: 8px 16px;
    border-radius: 0.375rem;
    color: white;
    font-weight: bold;
    transition: none;
}

.custom-nav {
    width: 100%;
    font-weight: lighter;
}

.component-core {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.side-core {
    height: 100vh;
    background-color: rgb(248, 248, 248);
}

.custom-navlink-positioning {
    display: flex;
    justify-content: center;
}

</style>