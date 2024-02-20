import { AbstractControl, ValidatorFn } from '@angular/forms';

export function guidValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const guidRegExp: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    if (control.value && !guidRegExp.test(control.value)) {
      return { 'invalidGuid': { value: control.value } };
    }
    return null;
  };
}

export function postcodeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const postcodeRegExp: RegExp = /^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]? [0-9][A-Za-z]{2}$/;

        if (control.value && !postcodeRegExp.test(control.value)) {
            return { 'invalidPostcode': { value: control.value } };
        }
        return null;
};
}

