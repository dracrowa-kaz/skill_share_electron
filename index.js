'use strict';

const electron = require('electron');
const dialog = require('electron').remote.dialog; //electron.remote.require('dialog'); //{dialog} = electron.remote;
const fileWatcher = require("chokidar");
const fs = require('fs');

class FileManager{
	constructor(){
		this.fileArray = [];
	}
}

class FileStruct{
	constructor(filename,sourcetext){
		this.filename = filename;
		this.sourcetext = sourcetext;
	}
}