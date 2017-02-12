/* ДЗ 3 - объекты и массивы */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i], i, array));
    }

    return result;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var result;

    if (initial) {
        result = initial;
        for (var i = 0; i < array.length; i++) {
            result = fn(result, array[i], i, array);
        }
    } else {
        result = array[0];
        for (i = 1; i < array.length; i++) {
            result = fn(result, array[i], i, array);
        }
    }

    return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (obj[prop]) {
        return true;
    }

    return false;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var props = Object.keys(obj);

    return props;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var props = Object.keys(obj);
    var stringProps = props.join().toUpperCase();
    var superProps = stringProps.split(',');

    return superProps;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var result = [],
        length = array.length;

    if ((from == undefined) && (to == undefined)) {
        result = array;

        return result;
    }

    if ((from == 0) && (to == 0)) {
        return result;
    }

    if (!to) {
        if ((from >= 0) && (from < length)) {
            for (var i = from; i < length; i++) {
                result.push(array[i]);
            }
        } else if ((from < 0) && (-from < length)) {
            for (i = length + from; i < length; i++) {
                result.push(array[i]);
            }
        } else if (from > length) {
            return result;
        } else if (-from > length) {
            result = array;
        }
    } else {
        if ((from >= 0) && (from < length) && (to >= 0) && (to < length)) {
            for (i = from; i < to; i++) {
                result.push(array[i]);
            }
        } else if ((from >= 0) && (from < length) && (to > length)) {
            for (i = from; i < length; i++) {
                result.push(array[i]);
            }
        } else if ((from >= 0) && (from < length) && (-to < length) && (to < 0)) {
            for (i = from; i < to + length; i++) {
                result.push(array[i]);
            }
        } else if ((from >= 0) && (from < length) && (-to > length)) {
            return result;
        } else if ((from < 0) && (-from > length) && (to < 0) && (-to < length)) {
            for (i = 0; i < to + length; i++) {
                result.push(array[i]);
            }
        } else if ((from < 0) && (-from > length) && (to > 0) && (to < length)) {
            for (i = 0; i < to; i++) {
                result.push(array[i]);
            }
        }
    }

    return result;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {
        set(obj, prop, value) {
            obj[prop] = value * value;

            return true;
        }
    });

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
