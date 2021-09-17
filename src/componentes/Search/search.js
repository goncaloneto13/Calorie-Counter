import './search.css'

export default function Search(){
    return(
        <div className='search'>
        
            <input type='text' name='Alimento' placeholder='Pesquisar...'></input>
            <button>Pesquisar</button>
            <button>Limpar</button>
        

        </div>
    )
}