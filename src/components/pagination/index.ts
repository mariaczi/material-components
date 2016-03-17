import Component from 'vue-class-component';
import mdIcon from '../icon';

import waveEffect from '../../directives/wave-effect';

var template = require('./pagination.html');

class Utils {
    static generatePagination = function(vm) {
        var pager = [];

        // generate window
        var currentPage = vm.currentPage;
        pager.push(currentPage);
        var skip = 1;
        while(pager.length < vm.displayPages && pager.length < vm.pages) {
            var page = currentPage + skip;
            if (page >= 0 && page < vm.pages) {
                pager.push(page);
            }
            skip = skip > 0 ? skip * -1 : skip * -1 + 1;
        }
        pager = pager.sort(function(n1, n2) { return n1 - n2; });

        return pager;
    };
}

@Component({
    props: {
        pageSize: {
            type: Number,
            required: true
        },
        totalRecords: {
            type: Number,
            required: true
        },
        displayPages: {
            type: Number,
            required: false,
            'default': 5
        },
        itemClass: {
            required: false,
            'default': null
        },
        firstLast: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    components: {
        mdIcon
    },
    directives: {
        waveEffect  
    },
    watch: {
        currentPage:  function() {
            this.$dispatch('pagination::selected', this.pagesWindow);
        },
        pages: {
            handler: function() {
                if (this.currentPage >= this.pages) {
                    this.currentPage = this.pages - 1;
                }
            }
        }
    },
    template: template
})
export default class Pagination {
    private active: boolean;
    private currentPage: number;
    private pageSize: number;
    private totalRecords: number;
    private itemClass: any;

    data() {
        return {
            currentPage: 0 // starts with 0
        }
    }

    get pages() {
        return Math.max(Math.ceil(this.totalRecords / this.pageSize), 1);
    }

    get pager() {
        return Utils.generatePagination(this);
    }

    getSelected() {
        return {
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            from: this.currentPage * this.pageSize,
            to: (this.currentPage + 1) * this.pageSize,
            size: this.pageSize
        }
    }

    getClasses(n: number) {
        var classes = {};
        if (this.itemClass instanceof Array) {
            this.itemClass.forEach((value, index, array) => {
                classes[value] = true;
            });
        }
        else if (this.itemClass instanceof Object) {
            for (var key in this.itemClass) {
                classes[key] = this.itemClass[key];
            }
        }
        else {
            classes[this.itemClass] = true;
        }

        classes['active'] = n == this.currentPage;

        return classes;
    }

    setCurrentPage (n) {
        this.currentPage = n;
    }

    previousPage () {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    nextPage() {
        if (this.currentPage < this.pages - 1) {
            this.currentPage++;
        }
    }
}