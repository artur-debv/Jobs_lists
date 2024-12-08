
import styles from '../css/SearchTags.module.css';
import { useTag } from './Context/TagContext';
export function SearchTags() {

    const { tag } = useTag();

    return (
        <div className={styles.content}>
            <input type="text" value={tag} className={styles.Search_box} placeholder='Buscar Empregos' />
        </div>
    )
} 