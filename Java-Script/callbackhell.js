function test1(cb){
    setTimeout(() => {
        console.log("task1");
        cb();
    },4000);
}


function test2(cb){
    setTimeout(() => {
        console.log("task2");
        cb();

    }, 2000);
}

function test3(){
    setTimeout(() => {
        console.log("task3");
        cb();
    }, 200)
}

function test4(){
    setTimeout(() => {
        console.log("task4");
        cb();
    }, 100)
}

test1(() => {
    test2(() => {
        test3(() => {
            task4();
        });
    });
})