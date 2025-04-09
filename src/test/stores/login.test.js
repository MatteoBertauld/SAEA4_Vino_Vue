import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

import { describe, test, expect, vi, beforeEach, beforeAll } from 'vitest'
import axios from 'axios'
import { LoginStore } from '@/stores/login'

vi.mock('axios')



const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

let loginStore
beforeAll(() => {
    let store = {}

    global.localStorage = {
        getItem: vi.fn((key) => store[key] || null),
        setItem: vi.fn((key, value) => {
            store[key] = value
        }),
        removeItem: vi.fn((key) => {
            delete store[key]
        }),
        clear: vi.fn(() => {
            store = {}
        }),
    }
})
beforeEach(() => {
    loginStore = LoginStore()
    localStorage.getItem.mockClear()
    localStorage.setItem.mockClear()
    localStorage.removeItem.mockClear()
    localStorage.clear.mockClear()
    localStorage.clear()
})


test('connexion réussie : email et mot de passe valides', async () => {
    axios.post.mockResolvedValue({
        data: { token: 'fake-token' }
    })

    const result = await loginStore.connexion('test@mail.com', 'secret')

    expect(axios.post).toHaveBeenCalledWith(
        'https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/login',
        {
            emailClient: 'test@mail.com',
            motdepasseclient: 'secret'
        }
    )

    expect(localStorage.getItem('token')).toBe('fake-token')
    expect(loginStore.user).toEqual({ mail: 'test@mail.com' })

    expect(result).toEqual({
        error: false,
        title: 'Connexion réussi',
        description: 'redirection sur la page home',
        statusCode: 202
    })
})


test('connexion échouée : email ou mot de passe invalide', async () => {
    axios.post.mockRejectedValue(new Error('Unauthorized'))

    const result = await loginStore.connexion('wrong@mail.com', 'badpass')

    expect(localStorage.getItem('token')).toBeNull()
    expect(loginStore.user).toEqual({ mail: null })

    expect(result).toEqual({
        error: true,
        title: 'Connexion Impossible',
        description: 'Email ou mot de passe invalide.',
        statusCode: 401
    })
})

test('logOut réinitialise les infos utilisateur et supprime le token', () => {

    localStorage.setItem('token', 'mytoken')
    loginStore.user = { mail: 'quelquun@mail.com' }

    loginStore.logOut()

    expect(localStorage.getItem('token')).toBeNull()
    expect(loginStore.user).toBeNull()
})

