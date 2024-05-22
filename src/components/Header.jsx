import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export default function Header({ DonwloadIcon }) {
    return (
        <div className='p-4 shadow-md border flex justify-between items-center'>
            <img src='/logo.svg' alt='Logo' />
            <Button className='flex gap-2 items-center' onClick={() => DonwloadIcon(Date.now())}>
                <Download className='h-4 w-4' />Download
            </Button>
        </div>
    );
}
