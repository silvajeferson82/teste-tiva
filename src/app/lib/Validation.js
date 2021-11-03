class Validation {
    constructor(data, includeMissing=true) {
        Validation.CUR_DATE = new Date(new Date().setHours(0, 0, 0, 0));
        Validation.YESTERDAY = new Date(new Date(Validation.CUR_DATE).setDate(Validation.CUR_DATE.getDate() - 1));
        Validation.MIN_DATE = new Date(new Date(Validation.CUR_DATE).setFullYear(Validation.CUR_DATE.getFullYear() - 200));
        Validation.MAX_DATE = new Date(new Date(Validation.CUR_DATE).setFullYear(Validation.CUR_DATE.getFullYear() + 200));
        Validation.MAX_DATE_BIRTH = new Date(new Date(Validation.CUR_DATE).setFullYear(Validation.CUR_DATE.getFullYear() - 18));
        
        this.data = data;
        this.includeMissing = includeMissing;
        this.validData = {};
        this.errors = [];
    }
    
    validateDate = (key, required=false, min=Validation.MIN_DATE, max=Validation.MAX_DATE) => {
        if (!this.data.hasOwnProperty(key)) {
            if (!this.includeMissing)
                return true;
            this.data[key] = null;
        }

        if (!this.data[key]) {
            if (required) {
                this.errors.push('Campo ' + key + ' é obrigatório.');
                return false;
            }
            
            this.validData[key] = this.data[key];
            return true;
        }
        
        if (typeof this.data[key] !== 'string') {
            this.errors.push('Campo ' + key + ' exige o tipo data no formato DD/MM/AAAA.');
            return false;
        }

        let match = this.data[key].match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (!match) {
            this.errors.push('Campo ' + key + ' exige o tipo data no formato DD/MM/AAAA.');
            return false;
        }

        let dateToString = d => String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();

        let date = new Date(match[3], match[2] - 1, match[1]);
        if (match[0] != dateToString(date)) {
            this.errors.push('Campo ' + key + ' apresenta data inválida.');
            return false;
        }

        if (date.getTime() < min.getTime() || date.getTime() > max.getTime()) {
            this.errors.push('Campo ' + key + ' precisa estar entre ' + dateToString(min) + ' e ' + dateToString(max) + '.');
            return false;
        }

        this.validData[key] = date;
        return true;
    }
}

export default Validation;
