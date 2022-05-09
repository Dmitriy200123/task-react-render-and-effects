import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

interface IEffectsProps {
    sourceId: string;
}

export function Effects({ sourceId }: IEffectsProps) {
    const [message, setMessage] = useState(-1);
    const callback = (value: number) => setMessage(value);

    useEffect(() => {
        subscribe(sourceId, callback);

        return () => {
            unsubscribe(sourceId, callback);
            setMessage(-1);
        };
    }, [sourceId]);

    return (
        <div>
            {sourceId}: {message}
        </div>
    );
}
