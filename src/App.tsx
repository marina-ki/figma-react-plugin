import * as React from 'react';
import { appendSpreadsheet } from './spreadsheet';

export const App = () => {
    const handleMessage =async (e) => {
        try{
            Promise.all(e.data.pluginMessage.names.map(name => 
                appendSpreadsheet({Name: name})))
        }catch(e){
            console.warn(e)
        }
    }

    React.useEffect(() => {
        window.addEventListener("message",handleMessage)
        return () => {
            window.removeEventListener("message",handleMessage)
        }
    }, [])
    return (
        <div>
            Hello, Figma Plugin with React
        </div>
    );
};
