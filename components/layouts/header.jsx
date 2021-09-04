import * as Hi from 'react-icons/hi'
import Logo from '../brand/logo'

export default function Header() {
    return(
        <header className="select-none">
            <nav className="fixed px-3 md:px-10 bg-black text-white h-20 w-full flex justify-between place-items-center">
                <div>
                    <Logo />
                </div>
                <div>
                    <button className="hidden sm:block text-2xl">
                        <Hi.HiMenuAlt3 />
                    </button>
                    <button className="sm:hidden text-2xl">
                        <Hi.HiOutlineMoon />
                    </button>
                </div>
            </nav>
            <nav className="fixed bottom-0 px-10 text-xl bg-black text-white h-20 w-full sm:hidden flex justify-between place-items-center">
                <div aria-describedby="home" role="button">
                    <Hi.HiHome />
                </div>
                <div aria-describedby="home" role="button">
                    <Hi.HiOutlineHome />
                </div>
                <div aria-describedby="home" role="button">
                    <Hi.HiOutlineHome />
                </div>
                <div aria-describedby="home" role="button">
                    <Hi.HiOutlineHome />
                </div>
            </nav>
        </header>
    )
}