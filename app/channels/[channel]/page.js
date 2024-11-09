'use client';

import { useSelector } from 'react-redux';

export default function GuildHome() {
    const a = useSelector(state => state);

    console.log(a);

    return (
        <h1>Guild Home</h1>
    );
}
