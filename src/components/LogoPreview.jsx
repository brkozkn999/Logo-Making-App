import React, { useContext, useEffect, useState } from 'react';
import { UpdateStorageContext } from '../context/UpdateStorage';
import { icons } from 'lucide-react';
import html2canvas from 'html2canvas';

const BASE_URL = 'https://logoexpress.tubeguruji.com';

function LogoPreview({ downloadIcon }) {
    const [storagedValue, setStoragedValue] = useState(JSON.parse(localStorage.getItem('value')));
    const { updateStorage } = useContext(UpdateStorageContext);

    useEffect(() => {
        setStoragedValue(JSON.parse(localStorage.getItem('value')));
    }, [updateStorage]);

    useEffect(() => {
        if (downloadIcon) {
            downloadPngLogo();
        }
    }, [downloadIcon]);

    const downloadPngLogo = () => {
        const downloadLogoDiv = document.getElementById('downloadLogoDiv');

        html2canvas(downloadLogoDiv, {
            backgroundColor: null
        }).then(canvas => {
            const pngImage = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngImage;
            downloadLink.download = 'logo.png';
            downloadLink.click();
        });
    };

    const Icon = ({ name, color, size, rotation }) => {
        const LucidIcon = icons[name];

        if (!LucidIcon) return null;
        return <LucidIcon color={color} size={size} style={{ transform: `rotate(${rotation}deg)` }} />;
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div
                className='h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300'
                style={{ padding: storagedValue?.bgPadding }}
            >
                <div id='downloadLogoDiv'
                    className='h-full w-full flex items-center justify-center'
                    style={{
                        borderRadius: storagedValue?.bgRounding,
                        background: storagedValue?.bgColor
                    }}>

                    {storagedValue?.icon?.includes('.png')
                        ?
                        <img src={'/png/' + storagedValue?.icon} alt="icon.png"
                            style={{
                                height: storagedValue?.iconSize,
                                width: storagedValue?.iconSize,
                                transform: `rotate(${storagedValue?.iconRotation}deg)`
                            }} />
                        :
                        <Icon
                            name={storagedValue?.icon}
                            color={storagedValue?.iconColor}
                            size={storagedValue?.iconSize}
                            rotation={storagedValue?.iconRotation} />
                    }
                </div>
            </div>
        </div>
    );
}

export default LogoPreview;
