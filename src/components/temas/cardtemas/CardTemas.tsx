import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
<<<<<<< HEAD
            <header className='py-2 px-6 bg-red-950 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-orange-50'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-800 
=======
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
>>>>>>> 6829c0016b5c43b9712f994416142b0003a6d661
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

<<<<<<< HEAD
                <Link to={`/deletartema/${tema.id}`}  className='text-slate-100 bg-red-600 hover:bg-red-700 w-full 
=======
                <Link to={`/deletartema/${tema.id}`}  className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
>>>>>>> 6829c0016b5c43b9712f994416142b0003a6d661
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>

            
            </div>

        </div>
    )
}

export default CardTemas