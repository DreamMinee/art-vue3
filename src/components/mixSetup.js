import {computed, onMounted, reactive, ref} from "vue";
import {email, helpers, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import Mail from "./mail";

export const setup = () => {
        let count = ref(0);
        let role = ref("student");

        const state = reactive({
            email: '',
        })

        const rules = computed(() => {
            const localRules = {
                email: {
                    required: helpers.withMessage("The form must be filled in", required),
                    email: helpers.withMessage("The form is filled incorrectly", email),
                },
            };

            return localRules;
        });

        const v$ = useVuelidate(rules, state);

        const form = reactive({
            inputForm: true,
            existingForm: false,
            successfulForm: false
        });
        let mail = new Mail();
        let position = 0;
        let play = 0;
        const submit = () => {
            if(v$.value.email.$model) {
                mail.check(v$.value.email.$model).then((data) => {
                    if (data.result) {
                        form.inputForm = false;
                        form.successfulForm = false;
                        form.existingForm = true;
                    } else {
                        mail.add(v$.value.email.$model, role.value);
                        form.inputForm = false;
                        form.successfulForm = true;
                        form.existingForm = false;
                    }
                })
            }
        }

        let nextVideo = () => {

            bgVideo.value.classList.add("in-video-bg");
            setTimeout(() => {
                bgVideo.value.classList.remove("in-video-bg");
            }, 2100)


            position++;
            if (position >= playlist.length) {
                position = 0;
            }
            bgVideo.value.src = playlist[position];


            bgVideo.value.load();
            bgVideo.value.play();
        };

        let playlist = ["/video/1mobile.mp4",
            "/video/2mobile.mp4",
            "/video/3mobile.mp4",
            "/video/4mobile.mp4",
            "/video/5mobile.mp4",
            "/video/6mobile.mp4",
            "/video/7mobile.mp4",
            "/video/8mobile.mp4",
            "/video/9mobile.mp4"];
        let bgVideo = ref(null);

        onMounted(() => {
            setTimeout(() => {
                bgVideo.value.addEventListener("ended", nextVideo, false);
                bgVideo.value.src = playlist[position];
                bgVideo.value.load();
                bgVideo.value.play();
            }, 1000);
        });



        return {
            state, v$,
            email,
            role,
            submit,
            bgVideo,
            form,
            count
        }
    }