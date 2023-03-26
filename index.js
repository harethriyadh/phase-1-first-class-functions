 function receivesAFunction(Spy)
 {  return Spy ()
    {
        console.log('');
    }
 }

 function returnsANamedFunction(fn) {
    return function fn ()
    {
        return '' ;
    }
 }

 function returnsAnAnonymousFunction() {
    return function () { return ''}
 }