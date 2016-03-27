import Component from 'vue-class-component';

import mdIcon from '../icon';
import mdSidenav from '../sidenav';

@Component({
    props: {
        active: {
            type: String,
            required: false,
            'default': null
        },
        showActive: {
            type: Boolean,
            required: false,
            'default': null
        },
        title: {
            type: String,
            required: false,
            'default': ''
        },
        titleHref: {
            type: String,
            required: false,
            'default': 'javascript:void(0)'
        },
        right: {
            type: Boolean,
            required: false,
            'default': false
        },
        left: {
            type: Boolean,
            required: false,
            'default': false
        },
        center: {
            type: Boolean,
            required: false,
            'default': false
        },
        fixed: {
            type: Boolean,
            required: false,
            'default': false
        },
        colorClass: {
            type: String,
            required: false,
            'default': null
        },
        hamburger: {
            type: Boolean,
            required: false,
            'default': false
        },
        closeOnClick: {
            type: Boolean,
            required: false,
            'default': true
        },
        onlySideNav: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    components: {
        mdIcon,
        mdSidenav
    },
    events: {
        'nav-item::activated': function (id, content) {
            if (this.closeOnClick) {
                this.$broadcast('sidenav::close');
            }
            // propagate event to children
            this.$broadcast('nav-item::activated', id);
            this.active = id;
        }
    },
    template: require('./navbar.html')
})
export default class Navbar {
    private $broadcast: any;

    private right: boolean;
    private left: boolean;
    private center: boolean;

    get logoClasses() {
        return {
            center: this.center,
            right: !this.center && !this.right,
            left: !this.center && !this.left
        };
    }

    get listClasses() {
        return {
            right: this.right,
            left: this.left
        };
    }
    
    openSideMenu() {
        this.$broadcast('sidenav::open');
    }

    closeSideMenu() {
        this.$broadcast('sidenav::close');
    }
}