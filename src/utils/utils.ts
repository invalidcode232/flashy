import * as _ from 'lodash';

const capitalizeString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelize = (obj: any) => {
    return _.mapKeys(obj, (v, k) => _.camelCase(k));
};

export { capitalizeString, camelize };
