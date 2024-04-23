import { useEffect } from "react";

const useEffectAsync = (effect: () => Promise<void>, deps?: React.DependencyList) => {
    useEffect(() => {
        effect();
    }, deps);
}

export default useEffectAsync;