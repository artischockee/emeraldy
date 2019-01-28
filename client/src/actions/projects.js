const ENTITY = 'Projects/';

export const Projects = {
  LOAD_DATA: `${ENTITY}LOAD DATA`,
  UNLOAD_DATA: `${ENTITY}UNLOAD DATA`
};

export const loadData = (data) => ({
  type: Projects.LOAD_DATA,
  payload: data
});

export const unloadData = () => ({
  type: Projects.UNLOAD_DATA
});

export const fetchData = (data) => (dispatch) => (
  fetch('/api/projects')
    .then(
      response => response.json(),
      error => console.error('An error occured', error)
    )
    .then(projects => dispatch(loadData(projects)))
);