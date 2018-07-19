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
            
            this.prmOpt(po, p2, p3);
            this.getParam().check(
                (tp) => {
                    try {
                        if ( ('string' != (typeof tp)) ||
                             ( ('top'    != tp) &&
                               ('right'  != tp) &&
                               ('bottom' != tp) &&
                               ('left'   != tp) ) ) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
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
}
module.exports = mofron.layout.Relative;
/* end of file */
