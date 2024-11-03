//Apply ke binding //Apply ke binding //Apply ke binding //Apply ke binding
//Apply ke binding //Apply ke binding //Apply ke binding //Apply ke binding
function hello(actor, actress) {
    console.log("Movie:", this.movie)
    console.log("Author:", this.author)
    console.log("Actor:", actor)
    console.log("Actress:", actress)
}



let shop = {
    movie: "SuperMan 3",
    author: "John Doe",
}

// 2. Apply ke through bind karna: Inbuilt function to change the binding inside hello
// function
// here arguments are written inside the array
// SYNTAX: hello.apply(this, [arguments]);
// hello.apply(person2, ["Delhi", "USA"]);

// NOTE: Call and apply ekdum immediately function ko call/invoke kr dete hai instant

// 3. Bind ke through this ko change krna
hello.apply(shop, ["Salman khan", "Amber Hertz"])














// 2. Apply ke through bind karna: Inbuilt function to change the binding inside hello
// function
// here arguments are written inside the array
// SYNTAX: hello.apply(this, [arguments]);
// hello.apply(person2, ["Delhi", "USA"]);

// NOTE: Call and apply ekdum immediately function ko call/invoke kr dete hai instant

// 3. Bind ke through this ko change krna