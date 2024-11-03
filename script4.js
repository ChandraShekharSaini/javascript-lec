
function outer(){
    var money = 150;
    function inner(){
        money++;
        var a =10;
        function innerMostFun(){
            money++;
            a++;
            console.log(money +" "+ a)
        }
        return innerMostFun;
    }
    return inner;
}

var fun =  outer()
var fun1 = fun();
var fun2 = fun();

fun1()
fun1()
fun2()
fun2()
fun2()
fun1()