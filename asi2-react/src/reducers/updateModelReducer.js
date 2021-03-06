//var Tools = require('../services/Tools.js');

//obligé de retourner un objet similaire à state : obligé ?
const updateModelReducer= (state={presentation:{},contentMap:{}},action) => {
	switch (action.type) {
		case 'UPDATE_PRESENTATION':
	 		const newPresentation={presentation:action.obj,contentMap:state.contentMap};
	 		return newPresentation;
		case 'UPDATE_PRESENTATION_SLIDS':
			let newSlidArray = state.presentation.slidArray;
			newSlidArray.forEach(function(value, index){
				if (value.id === action.obj.id){
					newSlidArray[index] = action.obj;
				}
			});
			const newPresentationSlid={
				id:state.presentation.id,
				title:state.presentation.title,
				description:state.presentation.description,
				slidArray:newSlidArray
			};
			const newPresentationSlids={presentation:newPresentationSlid,contentMap:state.contentMap};
			return newPresentationSlids;
		case 'UPDATE_CONTENT_MAP':
			const newContentMap={presentation:state.presentation,contentMap:action.obj};
			return newContentMap;
		case 'ADD_CONTENT':
			// state.contentMap[Object.keys(state.contentMap).length] = action.obj;
			state.contentMap[action.obj.id] = action.obj;
			const newContentMapState={presentation:state.presentation,contentMap:state.contentMap};
			return newContentMapState;
		default:
			return state;
	}
}
export default updateModelReducer;