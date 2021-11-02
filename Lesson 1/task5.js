/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/
const randomNumber = Math.floor(Math.random() * 100);
switch (true){
    case (randomNumber < 20):
        console.log("randomNumber меньше 20");
        break;
    case (randomNumber > 50):
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20, и меньше 50");
}
