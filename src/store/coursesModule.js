import axios from 'axios';

export const coursesModule = {
    state: () => ({
        courseSearchQuery: '',
        courseSubject: 0,
        isLoading: false,
        courses: [],
        filteredCourses: []
    }),
    getters: {
        filteredCourses(state) {
            return state.courses.filter(element => 
                (element.name?.toLowerCase().includes(state.courseSearchQuery.toLowerCase()) || element.description?.toLowerCase().includes(state.courseSearchQuery.toLowerCase())) &&
                (element.subject_id == state.courseSubject || state.courseSubject == 0)
                );
        },
    },
    mutations: {
        setCourses(state, courses) {
            state.courses = courses;
        },
        setCourseSearchQuery(state, courseSearchQuery) {
            state.courseSearchQuery = courseSearchQuery;
        },
        setCourseSubject(state, courseSubject) {
            console.log(courseSubject);
            state.courseSubject = courseSubject.id;
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
            catch (error) {

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
            catch (error) {

            }
        },
        clearCourseSearchQuery({commit}) {
            commit('setCourseSearchQuery', '');
        },
        clearCourseSubject({commit}) {
            commit('setCourseSubject', 0);
        }
    },
    namespaced: true
}