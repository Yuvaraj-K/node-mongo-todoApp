var env = process.env.NODE_ENV || 'developement';
console.log(`Running in ${env} mode`);

if (env === 'developement') {
    process.env.MONGOLAB_URI = 'mongodb://localhost:27017/TodoApp';
    process.env.PORT = 3000;
}