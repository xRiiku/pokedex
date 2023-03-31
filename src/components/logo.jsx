import Logoimg from '../assets/Pokédex_logo.png'

export function Logo() {
    return (
        <div className='logo'>
            <img src={Logoimg} alt='Logoimg'></img>
        </div>
    );
}