import React, { useEffect, useState } from 'react';
import { iconList } from '@/constants/icons';
import { icons } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import axios from 'axios';

const BASE_URL = 'https://logoexpress.tubeguruji.com';

function IconList({ selectedIcon }) {
    const storagedValue = JSON.parse(localStorage.getItem('value')) || {};
    const [openDialog, setOpenDialog] = useState(false);
    const [pngIconList, setPngIconList] = useState([]);
    const [icon, setIcon] = useState(storagedValue.icon || 'Smile');

    useEffect(() => {
        getPngIcons();
    }, []);

    const Icon = ({ name, color, size }) => {
        const LucidIcon = icons[name];

        if (!LucidIcon) return null;
        return <LucidIcon color={color} size={size} />;
    };

    const getPngIcons = () => {
        axios.get(BASE_URL + '/getIcons.php').then(resp => {
            setPngIconList(resp.data);
        });
    };

    return (
        <div>
            <label>Icon</label>
            <div onClick={() => setOpenDialog(true)} className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center'>
                {icon?.includes('.png') ?
                    <img src={BASE_URL + '/png/' + icon} alt="icon.png" />
                    :
                    <Icon name={icon} color={'rgb(0, 0, 0)'} size={20} />
                }
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick Your Favorite Icon!</DialogTitle>
                        <DialogDescription>
                            <Tabs defaultValue="icon" className="w-[400px]">
                                <TabsList>
                                    <TabsTrigger value="icon">Icons</TabsTrigger>
                                    <TabsTrigger value="color-icon">Colored Icons</TabsTrigger>
                                </TabsList>
                                <TabsContent value="icon">
                                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
                                        {iconList.map((icon, index) => (
                                            <div key={index} className='border p-3 flex rounded-sm items-center justify-center cursor-pointer'
                                                onClick={() => { selectedIcon(icon); setOpenDialog(false); setIcon(icon); }}>
                                                <Icon name={icon} color={'rgb(0, 0, 0)'} size={20} />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="color-icon">
                                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
                                        {pngIconList.map((icon, index) => (
                                            <div key={index} className='border p-3 flex rounded-sm items-center justify-center cursor-pointer'
                                                onClick={() => { selectedIcon(icon); setOpenDialog(false); setIcon(icon); }}>
                                                <img src={BASE_URL + '/png/' + icon} alt="icon.png" />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default IconList;
