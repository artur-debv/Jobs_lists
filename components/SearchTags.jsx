import { useState } from 'react';
import styles from '../css/SearchTags.module.css';
import { useTag } from './Context/TagContext';

export function SearchTags() {
    const { tag, removeTag } = useTag();

    function handleDeleteTag(tagToRemove) {
        removeTag(tagToRemove);
    }

  

    return (
        <div className={styles.content}>
            <input
                type="text"
                readOnly
                className={styles.Search_box}
            />
            <div className={styles.tagContainer}>
                {tag.map((tag, index) => (
                    <div key={index} className={styles.tagWrapper}>
                        <span className={styles.span_tag}>
                            {tag}
                        </span>
                        <button
                            onClick={() => handleDeleteTag(tag)} 
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
