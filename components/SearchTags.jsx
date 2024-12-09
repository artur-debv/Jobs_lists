import styles from '../css/SearchTags.module.css';
import { useTag } from './Context/TagContext';

export function SearchTags() {
    const { tag, removeTag } = useTag();


    function handleDeleteTag(tagToRemove) {
        removeTag(tagToRemove);
    }

    return (
        <div className={styles.content}>
            {/* Mostra as tags no input como texto */}
            <input
                type="text"
                readOnly
                className={styles.Search_box}
            />


            <div className={styles.tagContainer}>
                {tag.map((singleTag, index) => (
                    <div key={index} className={styles.tagWrapper}>
                        <span className={styles.span_tag}>
                            {singleTag}
                        </span>
                        <button
                            onClick={() => handleDeleteTag(singleTag)} // Passa a tag clicada
                            type="button"
                            className={styles.buttonRemoveTag}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
