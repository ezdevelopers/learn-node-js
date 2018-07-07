"use strict";

//Building a custom Node Event Emitter
module.exports = class Emitter{

    constructor(){
        //this.name = "Eze";
        this.events = {};
    }

    on(type,listener){
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type){
        if(this.events[type]){
            this.events[type].forEach(function(listener){
                listener();
            });
        }
    }
};


