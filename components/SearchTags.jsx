
import styles from '../css/SearchTags.module.css';

export function SearchTags(){
    return(
        <div className={styles.content}>
            <input type="text" className={styles.Search_box} placeholder='Buscar Empregos' />
        </div>
    )
}