
// Общее

function getWordReplacementFor(name, key)
{
    var result = '';

    var variable = names[name];
    try {
        result = variable[key];
    } catch (e) {
        e.toString();
    }
    return result;
}

var language = {
    none: '[Укажите язык]',
    english: 'англ.',
    german: 'нем.',
    french: 'фр.',
    ukrainian: 'укр.',
    belorussian: 'бел.'
};

var locations = {
    'Москва': 'М.',
    'Санкт-Петербург': 'СПб.'
};

var authors_number = {
    '_1author': 1,
    '_2authors': 2,
    '_3authors': 3,
    '_3Plusauthors': 4
};


// === Книги ===

var book_type = {
    none: '',
    monograph: 'монография',
    collectionOfScientificArticles: 'сб. науч. ст.',
    collectionOfScientificWorks: 'сб. науч. тр.',
    manual: 'учеб. пособие',
    textbook: 'учебник'
};

var book_personal_template_string = {
    cataloguer: 'сост. %(Книга:И.[О.] составителя)s %(Книга:Фамилия составителя)s ',
    interpreter: 'перевод с %(Книга:Язык оригинала)s %(Книга:И.[О.] переводчика)s %(Книга:Фамилия переводчика)s',
    editor: 'под ред. %(Книга:И.[О.] редактора)s %(Книга:Фамилия редактора)s'
};

var book_template_string = {
    'Книга:Шаблон:Под заголовком': '%(Книга:Автор перед заглавием)s %(Книга:Заглавие)s / %(Книга:Данные об ответственности)s . - %(Книга:Данные о публикации)s',
    'Книга:Шаблон:Под заглавием': '%(Книга:Заглавие)s / %(Книга:Данные об ответственности)s . - %(Книга:Данные о публикации)s'
};

var book_personal_from_html_ids = {
    book_cataloguer_surname: 'Книга:Фамилия составителя',
    book_cataloguer_IO: 'Книга:И.[О.] составителя',
    book_interpreter_surname: 'Книга:Фамилия переводчика',
    book_interpreter_IO: 'Книга:И.[О.] переводчика',
    book_editor_surname: 'Книга:Фамилия редактора',
    book_editor_IO: 'Книга:И.[О.] редактора'
};


// Снова общее
var names = {
    'Язык': language,
    'Города': locations,
    'Книга:Тип издания': book_type,
    'Книга:Количество авторов': authors_number,
    'Книга:Шаблон:Строка персонала': book_personal_template_string,
    'Книга:Сведения об ответственности': book_personal_from_html_ids,
    'Книга:Шаблон:Общий': book_template_string
};