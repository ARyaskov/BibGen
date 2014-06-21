

function buildBookAuthorBeforeTitle()
{
    var result = '';
    var authors_number = getWordReplacementFor('Книга:Количество авторов', $('#authors_number').val());
    if (authors_number <= 3)
    {
        result = $('#book_author' + authors_number + '_1_surname').val() + ', ' + $('#book_author' + authors_number + '_1_IO').val();
    }
    return result;
}


function responsibilityData()
{
    var result = '';

    var author_number = getWordReplacementFor('Книга:Количество авторов', $('#authors_number').val());
    if (author_number > 3)
    {
        result = $('#book_author3Plus1_IO').val() + ' ' + $('#book_author3Plus1_surname').val() + ' [и др.]';
    }
    else
    {
        for (var i = 1; i <= author_number; i++)
        {
            result += $('#book_author' + author_number + '_' + i + '_IO').val()
                    + ' ' + $('#book_author' + author_number + '_' + i + '_surname').val();
            if (i < author_number)
            {
                result += ', ';
            }
        }
    }

    result += ' ';

    var roles = [
        'cataloguer', // составитель
        'interpreter', // переводчик
        'editor' // редактор
    ];

    var needSeparateFlag = false;
    roles.forEach(
            function(role) {
                if ($('#book_' + role + '_surname').text().length !== 0
                        && $('#book_' + role + '_IO').text().length !== 0)
                {
                    var surname = getWordReplacementFor('Книга:Сведения об ответственности', 'book_' + role + '_surname');
                    var IO = getWordReplacementFor('Книга:Сведения об ответственности', 'book_' + role + '_IO');
                    var originLang = getWordReplacementFor('Язык', $('#translation_from').val());
                    var templateStr = getWordReplacementFor('Книга:Шаблон:Строка персонала', role);
                    var data = {};

                    data[surname] = '' + $('#book_' + role + '_surname').val();
                    data[IO] = '' + $('#book_' + role + '_IO').val();
                    data['Книга:Язык оригинала'] = originLang;


                    if (needSeparateFlag)
                    {
                        result += ' ; ';
                    }
                    result += sprintf(templateStr, data);
                    needSeparateFlag = true;
                }
            }
    );

    if ($('#customer_company').text().length !== 0)
    {
        if (needSeparateFlag)
        {
            result += ' ; ';
        }
        result += $('#customer_company').val();
    }

    return result;
}

function titleData()
{
    var result = '';
    var book_title = $('#book_title').val();
    var book_type = getWordReplacementFor('Книга:Тип издания', $('#book_type').val());
    result = book_title + ' : ' + book_type;
    return result;
}


function buildModifications()
{
    var result = '';
    var needCommaFlag = false;
    var needAndFlag = false;
    if ($('#revision_number').val())
    {
        result += $('#revision_number').val() + '-е изд.';
        needCommaFlag = true;
    }

    if ($('#is_revised').is(":checked"))
    {
        if (needCommaFlag)
        {
            result += ',';
        }
        result += ' перераб';
        needAndFlag = true;
    }
    if ($('#is_enlarged').is(":checked"))
    {
        if (needAndFlag)
        {
            result += ' и';
        }
        result += ' доп';
    }

    return result;
}

function publicationData()
{
    var result = '';
    var modifications = buildModifications();

    var pub_location = getShortedPubLocation($('#publication_location_input').val());
    var pub_company = $('#publishing_company').val();
    var pub_date = $('#publication_date').val();
    var pages_number = $('#pages_number').val();
    var series_title = $('#series_title').val();
    var notes = $('#notes').val();
    var data = {
        'Сведения об издании': modifications,
        'Место издания': pub_location,
        'Издательство или издающая организация': pub_company,
        'Дата издания': pub_date,
        'Объём': pages_number,
        'Серия': series_title,
        'Примечания': notes
    };
    if (modifications.length > 0)
    {
        result =
                sprintf('%(Сведения об издании)s. - %(Место издания)s : %(Издательство или издающая организация)s, %(Дата издания)s. - %(Объём)s с.', data);
    } else
    {
        result =
                sprintf('%(Место издания)s : %(Издательство или издающая организация)s, %(Дата издания)s. - %(Объём)s с.', data);
    }

    if (data['Серия'] !== '')
    {
        result += sprintf(" - (%(Серия)s).", data);
    }

    if (data['Примечания'] !== '')
    {
        result += sprintf(" - %(Примечания)s.", data);
    }

    return result;
}

function getShortedPubLocation(stringToShort)
{
    var result = '';
    switch (stringToShort) {
        case 'none':
            {
                result = '';
            }
            break;
        case "Москва":
            {
                result = 'М.';
            }
            break;
        case "Санкт-Петербург":
            {
                result = 'СПб.';
            }
            break;
        default:
            result = stringToShort;
    }

    return result;
}

function buildBib()
{
    var result = '';

    var data = {
        'Книга:Автор перед заглавием': buildBookAuthorBeforeTitle(),
        'Книга:Заглавие': titleData(),
        'Книга:Данные об ответственности': responsibilityData(),
        'Книга:Данные о публикации': publicationData()
    };
    if (isDescribeUnderTitle() === true)
    {
        result = sprintf(getWordReplacementFor('Книга:Шаблон:Общий', 'Книга:Шаблон:Под заглавием'), data);
    } else {
        result = sprintf(getWordReplacementFor('Книга:Шаблон:Общий', 'Книга:Шаблон:Под заголовком'), data);
    }

    return result;
}

function isDescribeUnderTitle()
{
    var result = false;
    var authors_number = $('#authors_number').val();
    if (authors_number === '3Plusauthors'
            || authors_number === 'without_authors')
    {
        result = true;
    }

    return result;
}
