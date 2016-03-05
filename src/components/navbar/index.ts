import Component from 'vue-class-component';

var template = require('./navbar.html');

const DEFAULT_CLASSES = ["hide-on-med-and-down"];

@Component({
    props: {
        title: {
            type: String,
            required: false,
            "default": ""
        },
        classes: {
            type: Array,
            required: false,
            "default": function () {
                return [];
            }
        },
        right: {
            type: Boolean,
            required: false,
            "default": false
        },
        left: {
            type: Boolean,
            required: false,
            "default": false
        },
        center: {
            type: Boolean,
            required: false,
            "default": false
        },
        fixed: {
            type: Boolean,
            required: false,
            "default": false
        },
        bgColor: {
            type: String,
            required: false,
            "default": ""
        }
    },
    template: template
})
export default class Navbar {
    private classes: string[];
    private right: boolean;
    private left: boolean;
    private center: boolean;
    private fixed: boolean;

    get logoClasses() {
        var classes: string[] = [];

        if (this.center) {
            classes.push("center")
        }
        else {
            if (!this.right) {
                classes.push("right");
            }
            if (!this.left) {
                classes.push("left");
            }            
        }

        return classes;
    }

    get listClasses() {
        var classes: string[] = [];
        if (this.classes && this.classes.length == 0) {
            classes = classes.concat(DEFAULT_CLASSES);
        }
        
        if (this.right) {
            classes.push("right");
        }
        if (this.left) {
            classes.push("left");
        }
        
        return classes;
    }
}