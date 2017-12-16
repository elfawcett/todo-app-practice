// Todo list
/*
  List todos
  Mark todo as completed
  Add todo
  Remove todo

*/
class Todo {
  constructor( name = 'TODO' ) {
    this.name = name
    this.todos = []
  }

  toString( todo ) {
    // Find index of todo
    const index = this.todos.indexOf( todo ) + 1
    const isCompleted = ( todo.completed ) ? 'X' : ' '
    return `${ index }. [${ isCompleted }] - ${ todo.text }`
  }

  addToDos( ...input ) {
    // Concat the array of objects produced by a map() of input to existing todos
    this.todos = this.todos.concat( input.map( text => ({ text, completed: false }) ) )
  }

  removeTodo( ...input ) {
    // Replace this.todos with new array from filter
    // .filter keeps each iterable if we return true, skips it if we return false
    this.todos = this.todos.filter( ( todo, index ) => {
      if ( typeof input === 'string' ) {
        return todo.text !== input
      }

      if ( typeof input === 'number' ) {
        return index !== ( input - 1 )
      }

      return true
    })
  }

  /* Accepts a todo name or index number */
  toggleTodo( input ) {
    // Replace this.todos with a new array of updated todos
    this.todos = this.todos.map( ( todo, index ) => {
      // Check for string or number
      if ( typeof input === 'string' ) {
        if ( todo.text === input ) {
          todo.completed = !todo.completed
        }
      }

      if ( typeof input === 'number') {
        if ( index === ( input - 1 ) ) {
          todo.completed = !todo.completed
        }
      }
      
      return todo
    })
  }

  listTodos() {
    console.log(`\n${ this.name }`)
    for ( const todo of this.todos ) {
      console.log( this.toString( todo ) )
    }
    console.log('\n')
  }
}

const MyTodo = new Todo()
console.log('add todos')
MyTodo.addToDos('Learn more JavaScript')
MyTodo.addToDos(`Don't be so bad`)
MyTodo.addToDos('Eat spaghetti')
MyTodo.addToDos('practice with filter')

MyTodo.listTodos()

console.log('toggle Learn more JS')
MyTodo.toggleTodo('Learn more JavaScript')

MyTodo.listTodos()

console.log('toggle 1 and 2')
MyTodo.toggleTodo(1)
MyTodo.toggleTodo(2)
MyTodo.listTodos()

console.log('remove be so bad and 3')
MyTodo.removeTodo(`Don't be so bad`)
MyTodo.removeTodo(3)
MyTodo.listTodos()
console.log('attempt to remove unexisting')
MyTodo.removeTodo({ name: 'what'}) // Doesn't do anything
MyTodo.listTodos()

const MyGroceries = new Todo('Grocery List')
MyGroceries.addToDos('milk','steaks','cat food')
MyGroceries.listTodos()
MyGroceries.toggleTodo('milk')
MyGroceries.toggleTodo( 3 )
MyGroceries.listTodos()