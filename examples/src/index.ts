import './module1';

if (Features.Test) {
    console.log('a')
} else {
    console.log('b');
}

if (Features.Test2) {
    console.log('a')
} else {
    console.log('b');
}


if (Features['Test2']) {
    console.log('a2')
} else {
    console.log('b');
}

import('./async-module').then(x => {

});


(System as any).import(/* webpackChunkName: "async-module" */ './async-module2.ts').then((module: any) => {
    // initApp(model);
});