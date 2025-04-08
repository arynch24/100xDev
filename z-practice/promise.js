var p = new Promise(function(resolve){
    resolve("hello");
})

async function main(){
    p.then(function(){ 
        console.log(p);
    })
}

main();
