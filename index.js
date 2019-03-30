/**
 * @file mofron-layout-relative/index.js
 * @brief relative layout of mofron
 * @author simpart
 */
const mf = require('mofron');

mf.layout.Relative = class extends mf.Layout {
    constructor (po, p2, p3) {
        try {
            super();
            this.name('Relative');
            this.prmMap(['type', 'value', 'multiple']);
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
            if (true === this.multiple()) {
                setmgn[this.type()] = this.value().value() * (idx+1) + this.value().type();
            } else {
                setmgn[this.type()] = this.value().toString();
            }
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try { return this.member('type', ['top', 'right', 'bottom', 'left'], prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try {
            return this.member(
                'value',
                ['Size'],
                (undefined !== prm) ? mf.func.getSize(prm) : prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    multiple (prm) {
        try { return this.member('multiple', 'boolean', prm, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.Relative;
/* end of file */
