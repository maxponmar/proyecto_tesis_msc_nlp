import React from 'react';

export default function Wordgroups({ data }) {
    if (Object.keys(data).length === 0) {
        return <div>No hay datos disponibles.</div>;
    }

    return (
        <div className='bg-gray-2 mt-4'>
            <h2 className='font-bold text-xl'>Palabras base y sus variaciones:</h2>
            <ul>
                {Object.entries(data).map(([palabra, variaciones]) => (
                    <li key={palabra}>
                        <strong>{palabra}:</strong> {variaciones?.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}
