(()=>{"use strict";const e=window.wp.blocks,o=window.wp.element,t=window.wp.i18n,n=window.wp.components,l=window.wp.blockEditor,r=JSON.parse('{"u2":"create-block/qomon-form"}');(0,e.registerBlockType)(r.u2,{edit:function(e){let{attributes:r,setAttributes:a}=e;return(0,o.createElement)("div",(0,l.useBlockProps)(),(0,o.createElement)(l.BlockControls,null),(0,o.createElement)(n.TextControl,{label:(0,t.__)("Qomon form ID","qomon"),value:r.base_id,onChange:e=>a({base_id:e})}),(0,o.createElement)(n.RadioControl,{label:(0,t.__)("Form Type","qomon"),selected:r.form_type,options:[{label:"Form",value:""},{label:"Petition",value:"petition"}],onChange:e=>{a({form_type:e})}}))},save:function(e){let{attributes:t}=e;return(0,o.createElement)("div",{class:"qomon-form","data-base_id":t.base_id,"form-type":t.form_type})}})})();