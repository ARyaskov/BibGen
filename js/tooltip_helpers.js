// Book type tooltip




var book_type_tooltip_options = {
    placement: 'right',
    title: 'Тип работы',
    html: true,
    content: '<p>Здесь нужно ввести тип работы.\n\
<p>Некоторые популярные типы: монография, сборник научных трудов Сборник научных статей, Учебное пособие, Учебник.',
    trigger: 'hover',
    delay: 500,
    container: 'body'
};

function buildTooltips()
{
    $('#book_type_question').popover(book_type_tooltip_options);
}