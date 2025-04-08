import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';


const mockTravelsStore = vi.fn(() => ({
    list: [
        { idsejour: 1, titreroute: 'Route 1' },
        { idsejour: 2, titreroute: 'Route 2' }
    ],
    getTravelById: vi.fn((id) => {
        return mockTravelsStore().list.find(travel => travel.idsejour === id) || null;
    }),
    load: vi.fn(() => Promise.resolve(mockTravelsStore().list))
}));

describe('Travels Store', () => {

    vi.mock('@/stores/travels', () => ({
        useTravelsStore: mockTravelsStore
    }));


    let travelsStore;
    let axiosMock;
    beforeEach(() => {
        // Initialisation du store avant chaque test

        travelsStore = mockTravelsStore();
        // Mock de l'importation d'axios
        axiosMock = {
            get: vi.fn(),
            post: vi.fn(),
            put: vi.fn(),
            delete: vi.fn()
        };
    });


    const pinia = createPinia()
    const app = createApp(App)
    app.use(pinia)

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('doit charger des données avec la méthode load()', async () => {
        // Mock de la réponse axios.get
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1', idlocaliteNavigation: { idlocalite: 1 }, idduree: 1, idcategorieparticipantNavigation: { idcategorieparticipant: 1 } }
        ];

        axiosMock.get.mockResolvedValue({ data: mockData }); // Simuler la réponse

        // Appel de la méthode load() qui va déclencher axios.get
        await travelsStore.load();

        // Vérifie si les données sont correctement chargées dans le store
        expect(travelsStore.list).toContain(mockData);
    });

    it('doit ajouter des données dans les propriétés correspondantes après le chargement', async () => {
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1', idlocaliteNavigation: { idlocalite: 1 }, idduree: 1, idcategorieparticipantNavigation: { idcategorieparticipant: 1 }, idthemeNavigation: { idtheme: 1 } }
        ];

        axiosMock.get.mockResolvedValue({ data: mockData });

        await travelsStore.load();

        // Vérifie que les autres propriétés réactives sont bien mises à jour
        expect(travelsStore.locations).toHaveLength(1);
        expect(travelsStore.vineries).toHaveLength(1);
        expect(travelsStore.timespans).toHaveLength(1);
        expect(travelsStore.targets).toHaveLength(1);
        expect(travelsStore.themes).toHaveLength(1);
    });

    it('doit retourner un voyage par ID avec getTravelById()', async () => {
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1' },
            { idsejour: 2, titreroute: 'Route 2' }
        ];

        axiosMock.get.mockResolvedValue({ data: mockData });

        await travelsStore.load();

        const travel = await travelsStore.getTravelById(1);
        expect(travel).toContain({ idsejour: 1, titreroute: 'Route 1' });
    });

    it('doit retourner null si aucun voyage n\'est trouvé avec getTravelById()', async () => {
        const mockData = [
            { idsejour: 1, titreroute: 'Route 1' }
        ];

        axiosMock.get.mockResolvedValue({ data: mockData });

        await travelsStore.load();

        const travel = await travelsStore.getTravelById(2);
        expect(travel).toBeNull();
    });

});