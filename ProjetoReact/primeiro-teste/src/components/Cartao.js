function Cartao(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <p>Nome: {props.nome}</p>
            <p>Profissão: {props.profissao}</p>
            <p>Sou estudante da Escola Etec Maria Cristina Medeiros e estou cursando tecnico para internet no segundo ano</p>
        </div>
    )
}
export default Cartao