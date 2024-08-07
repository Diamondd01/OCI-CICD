const {JSDOM}= require('jsdom')

const{document}= (new JSDOM('')).window;
global.document=document;
global.window=document.defaultView;
global.HTMLElement= window.HTMLElement;

const fetch = require("node-fetch");
global.fetch=fetch
