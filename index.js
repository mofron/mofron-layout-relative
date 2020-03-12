/**
 * @file mofron-layout-relative/index.js
 * @brief relative layout of mofron
 * @feature components are placed offset by 'relative' style value
 * @license MIT
 */
const comutl = mofron.util.common;
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Layout {
    /**
     * initialize layout
     *
     * @param (mixed) mofron.class.ConfArg: 'type','value' parameter
     *                key-value: layout config
     * @short type,value
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("Relative");
            this.shortForm("type","value");
            
            /* init config */
	    this.confmng().add("type", { type: "string", select: ["top", "right", "bottom", "left"], init: "top" });
            this.confmng().add("value", { type: "size", init: "0rem" });
            this.confmng().add("multiple", { type: "boolean", init: true }); 
            
	    /* set config */
	    if (undefined !== prm) { 
                this.config(prm);
            }
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
            
            let val = comutl.getsize(this.value());
            if (true === this.multiple()) {
                let ival = comutl.flo2int(val.value());
                if (0 === ival[1]) {
                    setmgn[this.type()] = (ival[0] * (idx+1)) + val.type();
                } else {
                    setmgn[this.type()] = ((ival[0] * (idx+1))/ival[1]) + val.type();
                }
            } else {
                setmgn[this.type()] = this.value();
            }
	    tgt.rootDom()[0].style(setmgn);
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
	    return this.confmng("type", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * offset value
     *
     * @param (string(size)) offset value
     * @return (string(size)) offset value
     * @type parameter
     */
    offset (prm) {
        try {
	    return this.value(prm);
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
        try {
	    return this.confmng("value", prm);
	} catch (e) {
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
    multiple (prm) {
        try {
	    return this.confmng("multiple", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
