// src/Context/TagContext.js
import { createContext, useContext, useState } from "react";

const TagContext = createContext();

export function TagProvider({ children }) {
    const [tag, setTags] = useState([]);

    const addTag = (tag) => {
        setTags((prevTags) => {
            if (!prevTags.includes(tag)) {
                return [...prevTags, tag];
            }
            return prevTags;
        });
    };

    return (
        <TagContext.Provider value={{ tag, addTag }}>
            {children}
        </TagContext.Provider>
    );
}

export function useTag() {
    return useContext(TagContext);
}
