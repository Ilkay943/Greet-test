function greet(name){
    if (name === null)
    return 'Hello there!';

    if (name == name.toUpperCase()){
        return 'HELLO' + name + '!';
    }

    if (typeof name == typeof []){
        if (name.lenght > 0) {
            let names = ' ' ;
            name foreach(element) => {
                names += ' , ' + element;

            };
            return 'Hello' + names;
        }
        return 'Hello there!';
    }
    module.exports = greet();
}