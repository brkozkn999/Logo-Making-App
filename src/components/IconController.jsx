import { Smile } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerController from './ColorPickerController';

function IconController() {
    const [size, setSize] = useState(256);
    const [rotation, setRotation] = useState(0);
    const [color, setColor] = useState('rgb(0, 0, 0)');
    const storagedValue = JSON.parse(localStorage.getItem('value'));

    useEffect(() =>{
        const updatedValue={
            ...storagedValue,
            iconSize:size,
            iconRotation:rotation,
            iconColor:color,
            icon:'Smile'
        }
        localStorage.setItem('value', JSON.stringify(updatedValue));
        
    }, [size, rotation, color]);

    return (
        <div>
            <div>
                <label>Icon</label>
                <div className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center'>
                    <Smile/>
                </div>
                <div className='py-2'>
                    <label className='p-2'>Size <span>{size} px</span></label>
                    <Slider defaultValue={[256]} max={512} step={1} onValueChange={(event)=>setSize(event[0])} />
                </div>

                <div className='py-2'>
                    <label className='p-2'>Rotation <span>{rotation}°</span></label>
                    <Slider defaultValue={[0]} max={360} step={1} onValueChange={(event)=>setRotation(event[0])} />
                </div>

                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Icon Color</label>
                    <ColorPickerController hideController={true} selectedColor={(color)=>setColor(color)}/>
                </div>
            </div>
        </div>
    )
}

export default IconController