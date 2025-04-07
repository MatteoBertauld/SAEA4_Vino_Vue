import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

import { expect, test, vi } from 'vitest'
import { LoginStore  } from "@/stores/login.js"

vi.mock('@/stores/login.js', {spy:true})

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const login = LoginStore()

test( 'login with correct login test', () => {
    expect(login.connexion("aina.carpentier@vinotrip.fr", "azeAZE&é\"123")).toReturnWith(error == false)
})
test( 'login with incorrect login test', () => {
    expect(login.connexion("unfauxmailLUL", "NEFaji")).toReturnWith(error == true)
})