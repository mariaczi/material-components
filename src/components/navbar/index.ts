import Component from 'vue-class-component';
import icon from '../icon';
import sidenavOverlay from '../sidenav-overlay';

require('./navbar.scss');
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
        },
        hamburger: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    components: {
        icon,
        sidenavOverlay
    },
    template: template
})
export default class Navbar {
    private classes: string[];
    private right: boolean;
    private left: boolean;
    private center: boolean;
    private fixed: boolean;

    private sideMenu: boolean;

    data() {
        return {
            sideMenu: false
        }
    }

    openSideMenu() {
        if (!this.sideMenu) {
            this.sideMenu = true;
        }
    }

    closeSideMenu() {
        if (this.sideMenu) {
            this.sideMenu = false;
        }
    }

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

    get computedStyle() {
        if (this.sideMenu) {
            return {
                left: 0
            }
        }
        return null;
    }
}