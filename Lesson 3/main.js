/* Document Object Model - программный интерфейс, позволяющий программам и скриптам получить доступ 
к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление 
таких документов. 

document.getElementById('id') - возвращает элемент по его id.
document.querySelector('class') - возвращает элемент по его классу(селектору).
document.querySelectorAll('class') - возвращает коллекцию (массив) элементов по их классу.

obj.innerHtml - возвращает содержимое объекта obj. 
obj.className - возвращает имя объекта obj. 
obj.classList.add('class') - добавляет свойство для объекта obj. 
obj.classList.remove('class') - удаляет свойство для объекта obj. 
obj.classList.toggle('class') - добавляет свойство, если его не было, и убирает, если было.

obj.style.fontSize - добавляет или изменяет свойство font-size (или любое другое) объекта obj.

ОБРАБОТКА СОБЫТИЙ:

В html:
<button id="btn" onClick="functionName()">Кнопка</button>

В js:
const functionName = () => {
    тело функции
}

или

btn.assEventListener ('click', () => {
    функция
})
*/