import Component from 'vue-class-component';

import components from '../../components';

@Component({
    props: {
        src: {
            required: true
        }
    },
    components,
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