export default class Utils {

    static merge(objA, objB) {
        var result = {};
        Utils.addAll(result, objA);
        Utils.addAll(result, objB);
        return result;
    };

    static addAll(base, add) {
        for (var key in add) {
            base[key] = add[key];
        }
        return base;
    }

    static getOffset(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);

        return {
            top: top,
            left: left
        };
    }
}