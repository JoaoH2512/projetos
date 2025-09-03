function Evento({ numero }){

    function meuEvento(){
        console.log(`Opa, fui ativado! ==> ${numero}`) // se usa a crase pra interpola  variavel com a string, se chama template string 
    }


    return(
        <div>
            <p>Clique aqui para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento