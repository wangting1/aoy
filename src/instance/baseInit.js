import { isArray, error, toArray, api, warn }  from '../util/index'
import { createVdom, createEle, patch, el }  from '../vdom/index'
import { injectStore, initStore, connect, dependent } from '../store/index'
import { createComponent } from '../component/index'
import { mount } from '../render/index'
export function baseInit(Aoy){
	Aoy.prototype._init = function(arg){

		this.dependManage = Object.create(null);
		this._initStore();

		if(arg.length === 0){
			//warn('初始化参数不能为空')
			return;
		}
		if(isArray(arg) && arg.length > 0) {
			const op = parseOption.call(this,arg)
		}	
	}

	Aoy.prototype._initStore = initStore;

	Aoy.prototype.createComponent = createComponent;

	Aoy.prototype.connect = connect;

	Aoy.prototype._dependent = dependent;

	Aoy.prototype.mount = mount;
	
	window.el = el;

	window.mount = function(parent,vdom){
		const d = createEle(vdom);
		api.appendChild(parent, d.el);
	}
	window.patch = patch;

}




