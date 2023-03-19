import {useCallback, useState} from "react";

type UseBinaryStateResult = [boolean, () => void, () => void, () => void];
export const useBinaryState = (defaultValue = false): UseBinaryStateResult => {
    const [state, setState] = useState(defaultValue);
    const makeTrue = useCallback(() => {
        setState(true);
    }, []);
    const makeFalse = useCallback(() => {
        setState(false);
    }, []);
    const toggle = useCallback(() => {
        setState(v => !v);
    }, []);

    return [state, toggle, makeTrue, makeFalse];
}