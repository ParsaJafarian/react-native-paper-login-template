export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';

    return '';
};

export const passwordValidator = (password: string) => {
    return (!password || password.length <= 0) ? 'Password cannot be empty.' : '';
};

export const nameValidator = (name: string) => {
    return (!name || name.length <= 0) ? 'Name cannot be empty.' : '';
};

export const schoolValidator = (school: string) => {
    return (!school || school.length <= 0) ? 'School name cannot be empty.' : '';
};
