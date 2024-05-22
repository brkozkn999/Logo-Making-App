import React, { useContext, useEffect, useState } from 'react';
import { Slider } from './ui/slider';
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '../context/UpdateStorage';

function BackgroundController() {
    const storagedValue = JSON.parse(localStorage.getItem('value')) || {};
    const [rounding, setRounding] = useState(storagedValue.bgRounding || 0);
    const [padding, setPadding] = useState(storagedValue.bgPadding || 0);
    const [color, setColor] = useState(storagedValue.bgColor || 'rgb(0, 0, 0)');
    const { setUpdateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        const updatedValue = {
            ...storagedValue,
            bgRounding: rounding,
            bgPadding: padding,
            bgColor: color
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [rounding, padding, color, setUpdateStorage]);

    return (
        <div>
            <div className='py-2'>
                <label className='p-2'>Rounded <span>{rounding} px</span></label>
                <Slider defaultValue={[rounding]} max={512} step={1} onValueChange={(event) => setRounding(event[0])} />
            </div>

            <div className='py-2'>
                <label className='p-2'>Padding <span>{padding} px</span></label>
                <Slider defaultValue={[padding]} max={100} step={1} onValueChange={(event) => setPadding(event[0])} />
            </div>

            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Background Color</label>
                <ColorPickerController hideController={false} selectedColor={(color) => setColor(color)} />
            </div>
        </div>
    );
}

export default BackgroundController;
