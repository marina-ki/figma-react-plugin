import * as React from 'react';
import { appendSpreadsheet } from './spreadsheet';

export const App = () => {
    const newRow = { Name: "new name", Value: "new value" };
    const handleNewLine = () => {
        appendSpreadsheet(newRow)
    }
    return (
        <div>
            Hello, Figma Plugin with React
            <button　onClick={handleNewLine}>てすと</button>
        </div>
    );
};
