export const getCookie = (name: string) => {
    try {
        const cookiesString = RegExp(name + '=[^;]+').exec(document.cookie);
        return decodeURIComponent(!!cookiesString ? cookiesString.toString().replace(/^[^=]+./, '') : '');
    } catch (err) {
        return '';
    }
};

export const setCookie = (name: string, value: string, expires?: Date) => {
    try {
        if (expires) {
            document.cookie = `${name}=${value}; path=/; expires=${expires}`;
        } else {
            document.cookie = `${name}=${value}; path=/;`;
        }
    } catch (err) {}
};
export const deleteCookie = (name: string) => {
    try {
        document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    } catch (err) {}
};
