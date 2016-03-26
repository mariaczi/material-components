import Component from 'vue-class-component';

import components from '../../components';
import mixins from '../../mixins';
import directives from '../../directives';

@Component({
    props: {
        src: {
            required: true
        }
    },
    directives,
    components,
    mixins,
    template: require('./doc-sources.html'),
})
export default class DocSources {
    private src: any;
    
    get sources() {
        if (Array.isArray(this.src)) {
            return this.src;
        }
        
        return [this.src];
    }
}