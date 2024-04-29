const obj={
    name: "Koyal",
    password: "01234",
    secret:"asdfg",
    Passkey:"5678",
    email:"koyalpunjabi72@gmail.com"
}
// const{password, secret, Passkey, ...languages}=obj;
// console.log(languages)
const anotherobj = obj;
obj.name="Prena"
console.log(obj.name)
console.log(anotherobj.name)
console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');