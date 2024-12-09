import styles from '../css/SearchTags.module.css';
import { useTag } from './Context/TagContext';

export function SearchTags() {
    const { tag } = useTag(); // `tag` é um array de tags, ex: ["tag1", "tag2"]

    return (
        <div className={styles.content}>
            {/* Input onde o usuário digita */}
            <input
                type="text"
                readOnly
                className={styles.Search_box}
            />

            {/* Exibição das tags separadas */}
            <div className={styles.tagContainer}>
                {tag.map((singleTag, index) => (
                    <>
                    <span key={index} className={styles.span_tag}>
                        {singleTag}
                    </span>
                    <div>
                        <button type='submit' className={styles.buttonRemoveTag}>X</button>
                    </div>
                    </>
                ))}
            </div>
        </div>
    );
}
