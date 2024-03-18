// __mocks__/document.js
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

// Create a basic DOM-like object
global.document = new JSDOM('<!DOCTYPE html><html><body></body></html>');

// Optionally, mock specific document methods (if needed)
global.document.querySelector = jest.fn(); // Example of mocking querySelector
