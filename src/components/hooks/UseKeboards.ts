import { useState } from 'react';
import {keyTypeInterface} from "../../interfaces/keyType.ts";

export function useKeboards():keyTypeInterface {
    const [key, setKey] = useState<keyTypeInterface>();

    const handleKeyDown = () =>{
        setKey(key);
    }

    return {
        key,
        handleKeyDown,
    };
}