import projectServices from '../services/projectServices'


export const getProjectsfromProperty = (itemObject) => {
    return async dispatch => {
        const projects = await projectServices.getProjectsfromProperty(itemObject)
        dispatch({
            type: "PROJECTS",
            data: projects
            })
    }
}

export const createProject = (itemObject) => {
    return async dispatch => {
        const project = await projectServices.createProject(itemObject)
        dispatch({
            type: "NEW_PROJECT",
            data: project
            })
            window.scrollTo({left: 0, top:0,  behavior: "smooth"});
    }
}

export const resetProjects = () => {
    return async dispatch => {
        dispatch({
            type: "RESET_PROJECTS",
            data: []
            })
    }
}



const projectReducer = (state=[], action) => {
    switch(action.type) {
        case 'PROJECTS':
            return action.data
        case 'RESET_PROJECTS':
            return action.data
        case 'NEW_PROJECT':
            let newProjects = state.concat(action.data)
            newProjects.sort(function(a,b){
                return new Date(b.created) - new Date(a.created);
              });
              return newProjects
        default:
            return state
    }
}

export default projectReducer