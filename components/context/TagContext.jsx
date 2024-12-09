// src/Context/TagContext.js
import { createContext, useContext, useState } from "react";

const TagContext = createContext();

export function TagProvider({ children }) {
    const [tag, setTags] = useState([]); // Estado inicial para as tags

    // Função para adicionar uma tag
    const addTag = (newTag) => {
        setTags((prevTags) => {
            if (!prevTags.includes(newTag)) {
                return [...prevTags, newTag];
            }
            return prevTags; // Não adiciona duplicadas
        });
    };

    // Função para remover uma tag
    const removeTag = (tagToRemove) => {
        setTags((prevTags) => prevTags.filter((singleTag) => singleTag !== tagToRemove));
    };

    return (
        <TagContext.Provider value={{ tag, addTag, removeTag }}>
            {children}
        </TagContext.Provider>
    );
}

// Hook para usar o contexto
export function useTag() {
    return useContext(TagContext);
}
