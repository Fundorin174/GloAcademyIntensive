function myFirstApp(name, age) {
alert('Привет, меня зовут '+ name + ' и это моя первая программа!');

function showSkills() {
    let skills = ['html', 'css', 'git', 'wordpress', 'photoshop'];
document.write ('Я владею:' + '<br>') ;
    for (let i = 0; i<skills.length; i++){
        document.write (skills[i] + '<br>');
    };
}

showSkills();

function checkAge(){
    if (age > 18) {
        alert ('Я уже могу служить в армии');
    } else {
        alert ('Мне надо еще подрасти для программирования');
    }
    
}
checkAge();

function calcPow(num) {
    console.log(num**2);
}
calcPow(5);

}
myFirstApp('Dmitry', 38);