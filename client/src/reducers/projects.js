import { Projects } from '../actions/projects';

const initialState = [];

const projects = (state = initialState, action) => {
  switch (action.type) {
    case Projects.LOAD_DATA:
      return [
        ...state,
        ...action.payload
      ];
    case Projects.UNLOAD_DATA:
      return initialState;
    default:
      return state;
  }
};

export const findProjectById = (id, state) => (
  state.projects.find(project => project.id === id)
);

export const filterProjectsById = (id, state) => (
  state.projects.filter(project => project.id !== id)
);

export default projects;