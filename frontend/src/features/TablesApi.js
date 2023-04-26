import axios from 'axios'

  export const getData = (name) => {
    return async (dispatch) => {
      try {
        let url = 'http://localhost:3000/files';
        if (name) {
          url = `http://localhost:3000/file/${name}`;
        }
        const response = await axios.get(url);
        const data = response.data;
        dispatch({ type: 'json', payload: data });
      } catch (error) {
        console.error(error);
      }
    };
  };