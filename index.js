/**
 * @file mofron-layout-relative/index.js
 * @brief relative layout of mofron
 * @author simpart
 */

mofron.layout.Relative = class extends mofron.Layout {
    constructor (po, p2, p3) {
        try {
            super();
            this.name('Relative');
            this.prmMap('type', 'value', 'multiple');
            this.prmOpt(po, p2, p3);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let setmgn = {};
            setmgn['position'] = 'relative';
            if (null === this.type()) {
                throw new Error('could not find type');
            }
            
            if ((true === this.multiple()) && ('number' === typeof this.value())) {
                setmgn[this.type()] = this.value() * (idx+1) + 'px';
            } else {
                setmgn[this.type()] = ('string' !== typeof this.value()) ? this.value() + 'px' : this.value();
            }
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (tp) {
        try {
            if (undefined === tp) {
                return (undefined === this.m_type) ? null : this.m_type;
            }
            if ( ('string' !== (typeof tp)) ||
                 ( ('top'    !== tp) &&
                   ('right'  !== tp) &&
                   ('bottom' !== tp) &&
                   ('left'   !== tp) ) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = tp;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_value) ? 0 : this.m_value;
            }
            /* setter */
            if ('string' !== (typeof prm) && ('number' !== typeof prm)) {
                throw new Error('invalid parameter');
            }
            this.m_value = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    multiple (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_multi) ? false : this.m_multi;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_multi = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Relative;
/* end of file */
