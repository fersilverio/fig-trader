<template>
    <div style="display: flex; flex-direction: row; justify-content: center;">
        <div class="container_custom_area">
            <div class="col-md-10">
                <div style="margin-bottom: 10px;">
                    <h1>Login</h1>
                    <form>
                        <div class="form-group">
                            <label class="py-3" for="email">E-mail</label>
                            <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail">
                        </div>
                        <div class="form-group">
                            <label for="senha" class="py-3">Senha</label>
                            <input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
                        </div>
                        <a href=""><p class="py-3">Esqueceu a senha?</p></a>
                        <div class="a">

                            <button type="submit" class="btn btn-primary button-custom">Entrar</button>
                            <button type="submit" class="btn btn-secondary button-custom">Limpar</button>


                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>
.fundo_teste {
    background-color: red;
}

.container_custom_area {
    margin-top: 10vh;
    height: 43vh;
    border-radius: 2.5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50vh;
    border: 1px solid black;


}

.button-custom {
    margin-right: 10px;
}

.a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.form-area {
    padding: 15px;
    margin: auto;
}
</style>