import React, { useContext, useEffect, useState } from 'react';
import { Slider } from './ui/slider';
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '../context/UpdateStorage';
import IconList from './IconList';

function IconController() {
    const storagedValue = JSON.parse(localStorage.getItem('value')) || {};

    const [size, setSize] = useState(storagedValue.iconSize || 256);
    const [rotation, setRotation] = useState(storagedValue.iconRotation || 0);
    const [color, setColor] = useState(storagedValue.iconColor || 'rgb(255, 255, 255)');
    const [icon, setIcon] = useState(storagedValue.icon || 'Smile');
    const { setUpdateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        const updatedValue = {
            ...storagedValue,
            iconSize: size,
            iconRotation: rotation,
            iconColor: color,
            icon: icon
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size, rotation, color, icon, setUpdateStorage]);

    return (
        <div>
            <IconList selectedIcon={(icon) => setIcon(icon)} />
            <div className='py-2'>
                <label className='p-2'>Size <span>{size} px</span></label>
                <Slider defaultValue={[size]} max={512} step={1} onValueChange={(event) => setSize(event[0])} />
            </div>

            <div className='py-2'>
                <label className='p-2'>Rotation <span>{rotation}°</span></label>
                <Slider defaultValue={[rotation]} max={359} step={1} onValueChange={(event) => setRotation(event[0])} />
            </div>

            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Icon Color</label>
                <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)} />
            </div>
        </div>
    );
}

export default IconController;
