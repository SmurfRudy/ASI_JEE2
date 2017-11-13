//var Tools = require('../services/Tools.js');
const updateModelReducer= (state={presentation:{},content_map:{}},action) => {
	console.log(action);
	switch (action.type) {
		case 'UPDATE_PRESENTATION':
	 		const newPresentation={presentation:action.obj};
	 		return newPresentation;
		case 'UPDATE_PRESENTATION_SLIDS':
			return; //TO DO
		case 'UPDATE_CONTENT_MAP':
			const newContentMap={content_map:action.obj};
			return newContentMap;
		case 'ADD_CONTENT':
			return; //TO DO
		default:
			return state;
	}
}
export default updateModelReducer;