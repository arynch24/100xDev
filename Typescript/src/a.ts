//generics 

function getFirstElement <T> (arr: T[]): T{
    return arr[0];
}

const el =getFirstElement<string>(["abara ka dabre","heheehheh"]);
console.log(el.toUpperCase());
