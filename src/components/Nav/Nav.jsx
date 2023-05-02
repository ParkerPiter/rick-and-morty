import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props){
    return(
        <div className={style.contenedor}>
            <Link to='/home' className={style.nav}>
                <h1 >Home</h1>
            </Link>
            <Link to='/about' className={style.nav}>
                <h1 >About</h1>
            </Link>
            <SearchBar className={style.buscador} onSearch={props.onSearch} ></SearchBar>
        </div>
    );
}

export default Nav