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
            this.prmMap('type', );
            this.prmOpt(po, p2, p3);
            this.getParam().check(
                (val) => {
                    try {
                        if ('string' !== (typeof val) && ('number' !== typeof val)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                (mlt) => {
                    try {
                        if (undefined === mlt) {
                            return false;
                        }
                        if ('boolean' !== (typeof mlt)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let prm = this.value();
            let tp  = prm[0];
            let val = prm[1];
            let mlt = prm[2];
            var setmgn = {};
            setmgn['position'] = 'relative';
            setmgn[tp] = (true === mlt) ? (val * (idx+1)) + 'px' : val + 'px';
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
            if ( ('string' != (typeof tp)) ||
                 ( (''       != tp) &&
                   ('top'    != tp) &&
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
    
    
}
module.exports = mofron.layout.Relative;
/* end of file */
