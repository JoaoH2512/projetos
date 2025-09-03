import { useState } from "react"

function Formulario(){
    
    function cadastrarUsuario(e){ // esse "e" é uma função para segurar alguns valores no front end 
        e.preventDefault()
        //console.log(nome)
        //console.log('Cadastrou o usuário')
        console.log(`Usuário ${nome} cadastrado com a senha: ${senha}`)
    }
    
    const[nome, setNome] = useState('') // Colocando o valor no useState direto ja fica no fomulario preenchido, n precisa deixar algo necessaria mente 
    const [senha, setSenha] = useState('')


    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={nome} // so coloca esse value nome quando ja coloca o nome dierto no useState
                    onChange={(e)=> setNome(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="senha">Senha: </label>
                    <input type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    onChange={(e)=> setSenha(e.target.value)}
                    />
                    
                </div>
                <div>
                    <input type="submit" values="Cadastrar"/>
                </div>
            </form>
            <p>Nome: {nome}</p>
            <p>Senha: {senha}</p>
        </div>
    )
}
export default Formulario