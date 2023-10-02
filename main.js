const fs = require('fs');

const inputFile = 'data.json';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        // Extract specific fields from each object in the array
        const extractedData = jsonData.map(item => {
            const { StockCode, ValCode, Attraction } = item;
            return `${StockCode}-${ValCode}-${Attraction}`;
        });

        // Convert the extracted data to a string
        const outputString = extractedData.join('\n');

        // Write the output to a file
        fs.writeFile('output.txt', outputString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to output file:', err);
            } else {
                console.log('Data written to output.txt');
            }
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
