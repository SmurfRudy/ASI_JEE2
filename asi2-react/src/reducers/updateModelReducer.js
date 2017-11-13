//var Tools = require('../services/Tools.js');

//obligé de retourner un objet similaire à state : obligé ?
const updateModelReducer= (state={presentation:{},contentMap:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'UPDATE_PRESENTATION':
	 		const newPresentation={presentation:action.obj,contentMap:state.contentMap};
	 		return newPresentation;
		case 'UPDATE_PRESENTATION_SLIDS':
			return; //TO DO
		case 'UPDATE_CONTENT_MAP':
			const newContentMap={presentation:state.presentation,contentMap:action.obj};
			return newContentMap;
		case 'ADD_CONTENT':
			return; //TO DO
		default:
			return state;
	}
}
export default updateModelReducer;