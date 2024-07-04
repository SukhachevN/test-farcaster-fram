import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        redirect('https://192.168.1.149:5173/');
    }, []);

    return <h1>Redirect</h1>;
}
