import { reactive, toRefs } from "vue";

export const useCounterMethod = () => {

    const state = reactive({
          currentCount: 12,
        });
    
        const incrementCount = () => {
          state.currentCount++;
        };
    
        return {
          ...toRefs(state),
          incrementCount,
        }
}

