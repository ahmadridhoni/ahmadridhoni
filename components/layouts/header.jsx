import * as Hi from 'react-icons/hi'

export default function Header() {
    return(
        <header>
            <nav className="fixed px-10 bg-black text-white h-20 w-full flex justify-between place-items-center">
                <div>
                    <h1>Ahmadridhoni</h1>
                </div>
                <div>
                    <button className="text-3xl">
                        <Hi.HiMenuAlt3 />
                    </button>
                </div>
            </nav>
        </header>
    )
}