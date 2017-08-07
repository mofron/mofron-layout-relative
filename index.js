/**
 * @file mofron-layout-relative/index.js
 * @brief relative layout of mofron
 * @author simpart
 */

mofron.layout.Relative = class extends mofron.Layout {
    constructor (tp,val) {
        try {
            super();
            this.name('Relative');
            
            this.m_type  = null;
            this.m_value = null;
            
            if ('object' === typeof tp) {
                this.prmOpt(tp);
            } else {
                this.type(tp);
                this.value(val);
            }
            this.target().style({
                'position' : 'relative'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            let tp  = this.type();
            let val = this.value();
            if ( (null === tp) || (null === val)) {
                throw new Error('invalid type/value');
            }
            var setmgn = {};
            setmgn[tp] = val + 'px';
            tgt.vdom().style(setmgn);
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
            if ( ('string' != (typeof tp)) ||
                 ( ('top'    != tp) &&
                   ('right'  != tp) &&
                   ('bottom' != tp) &&
                   ('left'   != tp) ) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = tp;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                return (undefined === this.m_value) ? null : this.m_value;
            }
            if ((null === val) || ('number' !== (typeof val))) {
                throw new Error('invalid parameter');
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.layout.relative = {};
module.exports = mofron.layout.Relative;
