# ReduSort | A sort visualization app made with React-Redux and TypeScript.

## Demo 
![demo](./public/demo.gif)

## Options
- Array Length: From 1 to 100.
- Speed of sorting: A slider allowing you to visualize sorting at your desired pace.
- Starting configuration: Choose starting array from random, nearly sorted or sorted in reverse order.

## Sorting algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Tim Sort

## Stack
- The project was initialized with CRNA and a TypeScript configuration. 
- The challenge (expecially for large inputs) was to allow the user to visualize the sorting process step by step without having to hold all the steps in memory. So the design choice was to rewrite each sort function into a generator function, to get steps only if needed. 
- That is also where Redux comes into play, providing a global store to the app, easing the process of processing and displaying sorting steps coming from the generator functions.
 