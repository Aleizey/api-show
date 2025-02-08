import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <div className='ms-5 max-sm:hidden'>
            <div className='space-x-5'>
                <NavLink className="text-sm font-bold hover:border-b-2 border-b-gray-300 pb-4" to="/">Home</NavLink>
                <NavLink className="text-sm font-bold hover:border-b-2 border-b-gray-300 pb-4" to="/categorias">Categorias</NavLink>
                <NavLink className="text-sm font-bold hover:border-b-2 border-b-gray-300 pb-4" to="/lista">Mi Lista</NavLink>
            </div>
        </div>
    )
};

export default Navbar;