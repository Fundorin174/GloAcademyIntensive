function myFirstApp(name, age) {
alert('Привет, меня зовут '+ name + ' и это моя первая программа!');

function showSkills() {
    let skills = ['html', 'css', 'git', 'wordpress', 'photoshop'];
document.body.innerHTML = ('Я владею:' + '<br>') ;
    for (let i = 0; i<skills.length; i++){
        document.body.innerHTML += (skills[i] + '<br>');
    };
}

showSkills();

function checkAge(){
    if (age < 18) {
        alert ('Я уже могу служить в армии');
    } else if (age >=18 && age <30) {
        alert ('В соку');
    } else {
        alert('Я старый');
    }
    
}
checkAge();

function calcPow(num) {
    console.log(num**2);
}
calcPow(5);
calcPow(10);
calcPow(7);

}
myFirstApp('Dmitry', 2);

// let arr = [123, 'Вася', true, false, [4,'B'], {}, function () {}, null, undefined];

// for (let i=0; i<arr.length; i++) {

//     document.body.innerHTML += 'Тип данных '+ arr[i] + ' - это ' + typeof(arr[i]) +'<br>';
// }
// document.body.innerHTML += 'Тип данных ' + (typeof(Symbol()))+'<br>';

