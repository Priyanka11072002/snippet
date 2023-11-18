
function outer(){
    var y = 10;
    inner()
    function inner(){
        console.log(x+y)
        var x = 20;
    }
}
outer()

