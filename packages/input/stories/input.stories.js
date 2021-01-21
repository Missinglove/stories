import LgInput from "../";
export default {
    title: "LgInput",
    component: LgInput
}
//({})代表是对象,如果不加()的话 代表的是代码块
export const Text = () => ({
    components: { LgInput },
    template: '<lg-input v-model="value"></lg-input>',
    data() {
        return {
            value: "admin"
        }
    }
})
export const Password = () => ({
    components: {
        LgInput
    },
    template: '<lg-input type="password" v-model="value"></lg-input>',
    data() {
        return {
            value: "admin"
        }
    }
})