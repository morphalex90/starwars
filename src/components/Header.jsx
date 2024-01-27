import Link from 'next/link';

export default function Header() {

    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <Link href='/'>StarWars</Link>
                </div>

                {/* <div className="header__menu">
                    <nav>
                        <ul>
                            <li><Link href="/people/">People</Link></li>
                            <li><Link href="/planets/">Planets</Link></li>
                        </ul>
                    </nav>
                </div> */}
            </div>
        </header>
    );
}
