<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Faça login</h5>
                        <form>
                            <div class="form-group">
                                <label for="email">Endereço de e-mail</label>
                                <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
                            </div>
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </form>
                    </div>
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
    width: 50vh;
    height: 50vh;
    border-radius: 8%;
}

.form-area {
    padding: 15px;
    margin: auto;
}
</style>