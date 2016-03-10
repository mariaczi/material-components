/*!
 * Materialize v0.97.5 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
import tooltip from '../../materialize/tooltip';

export default {
    methods: {
        tooltip: function (event, message, position, delay) {
            var element = event.currentTarget;
            return tooltip(element, message, position, delay)
        }
    }
}