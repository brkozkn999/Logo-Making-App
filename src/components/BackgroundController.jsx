import React, { useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerController from './ColorPickerController';

function BackgroundController() {
    const [rounding, setRounding] = useState(0);
    const [padding, setPadding] = useState(0);
    const [color, setColor] = useState('rgb(255, 255, 255)');
    const storagedValue = JSON.parse(localStorage.getItem('value'));

    useEffect(() =>{
        const updatedValue={
            ...storagedValue,
            bgRounding:rounding,
            bgPadding:padding,
            bgColor:color
        }
        localStorage.setItem('value', JSON.stringify(updatedValue));
        
    }, [rounding, padding, color]);

    return (
        <div>
            <div className='py-2'>
                <label className='p-2'>Rounded <span>{rounding} px</span></label>
                <Slider defaultValue={[0]} max={512} step={1} onValueChange={(event)=>setRounding(event[0])} />
            </div>

            <div className='py-2'>
                <label className='p-2'>Padding <span>{padding} px</span></label>
                <Slider defaultValue={[0]} max={100} step={1} onValueChange={(event)=>setPadding(event[0])} />
            </div>

            <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>Icon Color</label>
                    <ColorPickerController hideController={true} selectedColor={(color)=>setColor(color)}/>
                </div>
        </div>
    )
}

export default BackgroundController