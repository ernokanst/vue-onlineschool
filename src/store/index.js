// Utilities
import { createStore } from "vuex";
import { coursesModule } from './coursesModule';

export default createStore({
    modules: {
        courses: coursesModule
    }
})
