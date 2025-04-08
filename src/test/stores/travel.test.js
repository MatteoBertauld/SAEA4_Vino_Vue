import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

import { createPinia } from 'pinia';
import { useTravelsStore } from '@/stores/travels';
import axios from 'axios';
import { describe, expect, test, beforeEach, vi } from 'vitest';

vi.mock('axios')

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

describe('Travels Store', () => {

    beforeEach(() => {
        axios.get.mockReset()
    })

    let travelStore = useTravelsStore();

    test('doit charger les données avec load()', async () => {
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1', idlocaliteNavigation: { idlocalite: 1 }, idduree: 1, idcategorieparticipantNavigation: { idcategorieparticipant: 1 }, idcategorievignobleNavigation: { idcategorievignoble: 1 }, idthemeNavigation: { idtheme: 1 } },
            { idsejour: 2, titreroute: 'Route 2', idlocaliteNavigation: { idlocalite: 2 }, idduree: 2, idcategorieparticipantNavigation: { idcategorieparticipant: 2 }, idcategorievignobleNavigation: { idcategorievignoble: 2 }, idthemeNavigation: { idtheme: 2 } }
        ]

        axios.get.mockResolvedValue({
            data: mockData,
        })

        const travels = await travelStore.load();

        expect(axios.get).toHaveBeenCalledWith('https://a14vinotrip-fab8apb7c9aeergn.eastus-01.azurewebsites.net/api/Sejours/GetSejours')
        expect(travels).toStrictEqual(mockData)
    })

    test('doit retourner un voyage par ID avec getTravelById()', async () => {
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1', idlocaliteNavigation: { idlocalite: 1 }, idduree: 1, idcategorieparticipantNavigation: { idcategorieparticipant: 1 }, idcategorievignobleNavigation: { idcategorievignoble: 1 }, idthemeNavigation: { idtheme: 1 } },
            { idsejour: 2, titreroute: 'Route 2', idlocaliteNavigation: { idlocalite: 2 }, idduree: 2, idcategorieparticipantNavigation: { idcategorieparticipant: 2 }, idcategorievignobleNavigation: { idcategorievignoble: 2 }, idthemeNavigation: { idtheme: 2 } }
        ];

        axios.get.mockResolvedValue({
            data: mockData
        })
        const travels = await travelStore.getTravelById(1);
        expect(travels).toEqual(mockData[0]);
    });


    test('doit retourner une valeur null avec getTravelById() avec un Id inexistant', async () => {
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1', idlocaliteNavigation: { idlocalite: 1 }, idduree: 1, idcategorieparticipantNavigation: { idcategorieparticipant: 1 }, idcategorievignobleNavigation: { idcategorievignoble: 1 }, idthemeNavigation: { idtheme: 1 } },
            { idsejour: 2, titreroute: 'Route 2', idlocaliteNavigation: { idlocalite: 2 }, idduree: 2, idcategorieparticipantNavigation: { idcategorieparticipant: 2 }, idcategorievignobleNavigation: { idcategorievignoble: 2 }, idthemeNavigation: { idtheme: 2 } }
        ];

        axios.get.mockResolvedValue({
            data: mockData
        })

        const nonExistentTravel = await travelStore.getTravelById(999);
        expect(nonExistentTravel).toBeNull();

    })
});