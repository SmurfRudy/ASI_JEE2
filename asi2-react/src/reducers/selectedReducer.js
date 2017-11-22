const selectedReducer= (state={slid:{}, dragged:{}},action) => {
	switch (action.type) {
		case 'UPDATE_SELECTED_SLID':
			const newState1={slid:action.obj,dragged:state.dragged};
			return newState1;
		case 'UPDATE_DRAGGED':
			const newDraggedState={slid:state.slid,dragged:action.obj};
			return newDraggedState;
		default:
			return state;
	}
}
export default selectedReducer;