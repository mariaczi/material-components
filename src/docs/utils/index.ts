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
}