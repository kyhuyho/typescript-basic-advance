/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

let language: string = "TypeScript";
// language = 100; error
const score: number = 100;
const isAvailable: boolean = true;

const text: string = language === "TypeScript" ? "weired" : "awesome";
// mac dinh la any
let keyboard;
keyboard = 10;
keyboard = "Heros";
keyboard = false;
let bottle: undefined = undefined;
let mouse: null = null;
let study: unknown;
study = "TS";
if (typeof study === "string") {
  study.length;
}
function sum(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return 0;
}
sum(1, 2);
function calculate(): never {
  throw new Error("some message");
}
