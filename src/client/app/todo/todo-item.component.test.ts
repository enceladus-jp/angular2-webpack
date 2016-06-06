import { iTodo } from './todo.service' ;
import { TodoItemComponent } from './todo-item.component';

import {
  async,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';

describe("test TodoItemComponent>", function() {
    
    it("test constructor", function() {
        var todo = <iTodo>{title: "", completed: false};            
        var compo = new TodoItemComponent();
        
        expect(compo.getTodo()).toEqual(todo);
    });
    
    // TestComponentBuilderは、fixture用のComponentを作成して外側から操作・検証するAPIを提供
    it('test form',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(TodoItemComponent)
            .then((fixture: ComponentFixture<any>) => {
//console.log("fixture.debugElement.nativeElement", fixture.debugElement.nativeElement);
                
                let input = fixture.debugElement.nativeElement.querySelector('input');
//console.log("todo", fixture.componentInstance.todo);
                
                let button = fixture.debugElement.nativeElement.querySelector('button');
//console.log("button", button);
                
                // "aaa"を代入
                console.log("input.value", input.value);
                fixture.componentInstance.todo.title = "aaa";
//console.log("todo", fixture.componentInstance.todo);
                fixture.detectChanges();        // Componentの変更検知要求
                console.log("input.value", input.value);
                
                // "aaa"が入っているかチェック
                expect(input.value).toEqual("aaa");
                
                // Addボタンクリック
                let evt = document.createEvent('MouseEvents');
                evt.initEvent('click', false, true);
                button.dispatchEvent(evt);
    
//console.log("todo", fixture.componentInstance.todo);
                console.log("input.value", input.value);
                
                
                fixture.detectChanges();        // Componentの変更検知要求
                console.log("input.value", input.value);

                // "aaa"が消されているかチェック
                expect(input.value).toEqual("");                
            });
        })
    ));
    
});

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
