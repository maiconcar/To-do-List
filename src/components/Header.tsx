import styles from './Header.module.css';
import { Rocket} from '@styled-icons/remix-fill/Rocket';

export function Header() {
    return (
        
            
            <header className={styles.header}> 
                <Rocket className={styles.rocket}/>
                <strong >to </strong> <span>do</span>
            </header>
        

    );
}