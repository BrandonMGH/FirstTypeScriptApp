var Cat = /** @class */ (function () {
    function Cat(id, name, weight, height) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    Cat.prototype.getInfo = function () {
        console.log(this.id, this.name, this.weight, this.height);
    };
    return Cat;
}());
var Sinatra = new Cat(1, "Sinatra", 2, 10);
Sinatra.getInfo();
var wrapinArray = function (param) {
    if (typeof param === "string") {
        return [param];
    }
    else {
        return param;
    }
};
console.log(wrapinArray("Deborah"));
