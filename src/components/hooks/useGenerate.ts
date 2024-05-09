import { useState } from 'react';
import { wordsArray } from "../../utils/wordsArray";
import {GenerateResult} from "../../interfaces/GenerateResult.ts";


export function useGenerate(limits:number): GenerateResult {
    const [randomWords, setRandomWords] = useState<string[]>([]);
    const generateRandomWords = (): void => {
        const randomIndexes: number[] = [];
        const randomWordsArray: string[] = [];

        while (randomIndexes.length < limits) {
            const randomIndex = Math.floor(Math.random() * wordsArray.length);

            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
                randomWordsArray.push(wordsArray[randomIndex]);
            }
        }
        setRandomWords(randomWordsArray);
    };

    return {
        randomWords,
        generateRandomWords,
    };
}