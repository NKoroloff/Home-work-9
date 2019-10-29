describe('counter-recursively', function () {

    it('Сounter-recursively check first click', function () {
        const exp = 1;
        let count =  makeCounter();
        const act = count();

        assert.equal(exp, act);
    });

    it('Сounter-recursively check second click ', function () {
        const exp = 2;
        let count =  makeCounter();
        count();
        const act = count();

        assert.equal(exp, act);
    });

    it('Сounter-recursively check more click (3)', function () {
        const exp = 3;
        let count =  makeCounter();
        count()
        count()
        const act = count();

        assert.equal(exp, act);
    });

    it('Сounter-recursively check more click (4)', function () {
        const exp = 4;
        let count =  makeCounter();
        count()
        count()
        count()
        const act = count();

        assert.equal(exp, act);
    });

    it('Сounter-recursively check more click (5)', function () {
        const exp = 5;
        let count =  makeCounter();
        count()
        count()
        count()
        count()
        const act = count();

        assert.equal(exp, act);
    });

    it('Сounter-recursively check more click (6)', function () {
        const exp = 6;
        let count =  makeCounter();
        count()
        count()
        count()
        count()
        count()
        const act = count();

        assert.equal(exp, act);
    });
});

describe('factorial function recursively', function () {

    it('factorial function recursively input 3', function () {
        const exp = 6;
        const act = factorial(3);

        assert.equal(exp, act);
    });

    it('factorial function recursively input 4', function () {
        const exp = 24;
        const act = factorial(4);

        assert.equal(exp, act);
    });

    it('factorial function recursively input 5', function () {
        const exp = 120;
        const act = factorial(5);

        assert.equal(exp, act);
    });

    it('factorial function recursively input 6', function () {
        const exp = 720;
        const act = factorial(6);

        assert.equal(exp, act);
    });

    it('factorial function recursively input 7', function () {
        const exp = 5040;
        const act = factorial(7);

        assert.equal(exp, act);
    });

    it('factorial function recursively input 10', function () {
        const exp = 3628800;
        const act = factorial(10);

        assert.equal(exp, act);
    });


});

describe('binarysearch function recursively', function () {
    let arr = [];
    beforeEach(function() {
        arr = [];
    });
    it('binarysearch function recursively input 10 with 50 elems', function () {
        const exp = 10;
        addToArray(50, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10  with 100 elems', function () {
        const exp = 10;
        addToArray(100, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10  with 200 elems ', function () {
        const exp = 10;
        addToArray(200, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10  with 500 elems', function () {
        const exp = 10;
        addToArray(500, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10  with 1000 emes', function () {
        const exp = 10;
        addToArray(1000, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10 with 10000 emes', function () {
        const exp = 10;
        addToArray(10000, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10 with 50000 emes', function () {
        const exp = 10;
        addToArray(50000, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });

    it('binarysearch function recursively input 10 with 500000 emes', function () {
        const exp = 10;
        addToArray(500000, arr)
        const act = binarySearch(10, arr)

        assert.equal(exp, act);
    });




});
describe('finonacci function recursively', function () {
    it('write a number and return ' , function () {
        const exp = 2;
        const act = fibonachi(3)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 3;
        const act = fibonachi(4)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 5;
        const act = fibonachi(5)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 8;
        const act = fibonachi(6)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 13;
        const act = fibonachi(7)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 21;
        const act = fibonachi(8)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 34;
        const act = fibonachi(9)

        assert.equal(exp, act)
    })

    it('write a number and return ' , function () {
        const exp = 55;
        const act = fibonachi(10)

        assert.equal(exp, act)
    })

});