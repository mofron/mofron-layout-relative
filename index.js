/**
 * @file mofron-layout-relative/index.js
 * @brief relative layout of mofron
 * @feature components are placed offset by 'relative' style value
 * @author simpart
 */
const mf = require('mofron');

mf.layout.Relative = class extends mf.Layout {
    /**
     * initialize layout
     *
     * @param (string/object) string: 'type' parameter
     *                        object: layout options
     * @param (string) 'value' parameter
     * @param (boolean) 'multiples' parameter
     * @pmap type,offset,multiples
     * @type private
     */
    constructor (po, p2, p3) {
        try {
            super();
            this.name('Relative');
            this.prmMap(['type', 'offset', 'multiples']);
            this.prmOpt(po, p2, p3);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * layout contents
     * 
     * @param (number) component index
     * @param (component) target component
     * @type private 
     */
    contents (idx, tgt) {
        try {
            let setmgn = {};
            setmgn['position'] = 'relative';
            
            let val = mf.func.getSize(this.value());
            if (true === this.multiples()) {
                let int_val = mf.func.flo2int(val.value());
                if (0 === int_val[1]) {
                    setmgn[this.type()] = (int_val[0] * (idx+1)) + val.type();
                } else {
                    setmgn[this.type()] = ((int_val[0] * (idx+1))/int_val[1]) + val.type();
                }
            } else {
                setmgn[this.type()] = this.value();
            }
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * direction type
     * 
     * @param (string) direction type ["top"/"right"/"bottom"/"left"]
     * @return (string) direction type
     * @type parameter
     */
    type (prm) {
        try {
            return this.member('type', ['top', 'right', 'bottom', 'left'], prm, "top");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * offset value
     *
     * @param (string (size)) offset value
     * @return (string (size)) offset value
     * @type parameter
     */
    offset (prm) {
        try {
            if (undefined !== prm) {
                mf.func.getSize(prm);
            }
            return this.member("value", "string", prm, "0rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * same as 'offset'
     *
     * @param (string) same as 'offset' parameter
     * @return (string) same as 'offset' return
     * @type parameter
     */
    value (prm) {
        try { return this.offset(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * multiples value flag
     *
     * @param (boolean) true: offset value is multiples values to the component index
     *                  false: offset value not multiples
     * @return (boolean) multiple flag
     * @type parameter
     */
    multiples (prm) {
        try { return this.member('multiples', 'boolean', prm, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.Relative;
/* end of file */
