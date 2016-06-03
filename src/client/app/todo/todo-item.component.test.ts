import { EventEmitter } from '@angular/core' ;

import { iTodo } from './todo.service' ;


/*import {
  async,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync,
} from '@angular/core/testing';*/
/*import { ComponentFixture, TestComponentBuilder }
from '@angular/compiler/testing';
import { Component, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';*/
import { TodoItemComponent } from './todo-item.component';

//var TodoItemComponent = require('./todo-item.component');

//describe("TestSample>", function(){
    
    describe("test TodoItemComponent>", function() {
        
        it("test constructor", function() {
            var todo = <iTodo>{title: "", completed: false};            
            var compo = new TodoItemComponent();
            
            expect(compo.getTodo()).toEqual(todo);
        });        
    });
//});

/*
function Logic() {

}
Logic.prototype.squaredNumber = function(num){
    return num * num;
};

describe("TestSample>", function(){
    describe("Logic>", function() {
        it("multiNumber", function() {
            var target = new Logic();
            var num = 3;
            var expected = 10;

            var result = target.squaredNumber(num);

            expect(expected).toEqual(result);

        })
    });
});

export class TodoItemComponent {
    private todo : iTodo ;
    @Output() addTodo = new EventEmitter() ;

    constructor() {
        this.todo = <iTodo>{title: "", completed: false};
    }

    add(todo: iTodo) {
        this.addTodo.emit(todo) ;
        this.todo = <iTodo>{title: "", completed: false};
    }
}
*/
