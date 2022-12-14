export default function list(state=[], action){
    switch(action.type){
        case 'add':
            const obj = action.payload;
            if(state.length===0){
                obj.id=1;
            }else{
                obj.id = state[state.length - 1].id + 1;
            }
            const arr = state.concat(obj);
            return arr;
        
        case "delete":
            const arr1 = state.filter(e=>e.id !== action.payload);
            return arr1;
        
        case 'all':
            return [];
        
        case 'edit':
            const arr2 = state.map(e=>{
                if(e.id !== action.payload.id){
                    return e;
                }else{
                    return action.payload;
                }
            })
            return arr2;
        
        default: 
            return state;
               
    }
}