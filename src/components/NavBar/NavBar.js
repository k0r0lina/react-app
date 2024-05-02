import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div>                
                    <i className="fa fa-tasks"></i>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                         to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;