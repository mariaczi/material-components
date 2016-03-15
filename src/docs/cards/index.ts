import Component from 'vue-class-component';
import docDefaultCard from './default';
import docImageCard from './image';
import docRevealCard from './reveal';
import docSnippet from '../snippet';

var template = require('./cards.html');

@Component({
    template: template,
    components: {
        docDefaultCard,
        docImageCard,
        docRevealCard,
        docSnippet
    }
})
export default class Cards {
    data() {
        return {
            defaultCardSnippet: require('./default/default.snippet.html'),
            imageCardSnippet: require('./image/image.snippet.html'),
            revealCardSnippet: require('./reveal/reveal.snippet.html')
        }
    }
}