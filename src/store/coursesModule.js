import axios from 'axios';

export const coursesModule = {
    state: () => ({
        courseSearchQuery: '',
        isLoading: false,
        courses: [],
        filteredCourses: []
    }),
    getters: {
        filteredCourses(state) {
            return state.courses.filter(element => 
                element.name?.toLowerCase().includes(state.courseSearchQuery.toLowerCase()) || element.description?.toLowerCase().includes(state.courseSearchQuery.toLowerCase()));
        },
        slidesCourses(state) {
            return state.courses.filter(element => !!element.slider);
        }
    },
    mutations: {
        setCourses(state, courses) {
            state.courses = courses;
        },
        setCourseSearchQuery(state, courseSearchQuery) {
            state.courseSearchQuery = courseSearchQuery;
        },
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setFilteredCourses(state, filteredCourses) {
            state.filteredCourses = filteredCourses;
        }
    },
    actions: {
        async loadingCourses({commit}) {
            try {
                commit('setLoading', true);
                commit('setCourses', []);

                const { data } = await axios.get('/main.json');
                commit('setCourses', data);
            }
            catch (e) {

            }
            finally {
                commit('setLoading', false);
            }
            
        },
        async loadingCourse({}, id) {
            try {
                const { data } = await axios.get('/main.json');
                return data.find(el => el.id == id);
            }
            catch (e) {

            }
        },
        clearCourseSearchQuery({commit}) {
            commit('setCourseSearchQuery', '');
        }
    },
    namespaced: true
}