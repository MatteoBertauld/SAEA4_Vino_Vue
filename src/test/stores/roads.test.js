// tests/stores/roads.test.js
import { setActivePinia, createPinia } from 'pinia';
import { useRoadsStore } from '@/stores/roads';
import { LoginStore } from '@/stores/login';
import { describe, test, expect, beforeEach, vi } from 'vitest';

vi.mock('@/stores/login', () => {
  return {
    LoginStore: vi.fn(() => ({
      axiosWithToken: vi.fn(() => axiosMock)
    }))
  };
});

const axiosMock = {
  post: vi.fn(),
  put: vi.fn(),
  delete: vi.fn()
};

const travelMock = {
  titreroute: "Route des vins d'Alsace",
  descriptionroute: "Une belle route à travers les vignobles",
  photoroute: "alsace.jpg",
  idcategorievignobles: [1, 2],
  idroute: 42
};

describe('Roads Store', () => {
  let roadsStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    roadsStore = useRoadsStore();
    axiosMock.post.mockReset();
    axiosMock.put.mockReset();
    axiosMock.delete.mockReset();
  });

  test('Ajoute une nouvelle route avec succès', async () => {
    axiosMock.post.mockResolvedValueOnce({ data: { idroute: 123 } });
    const result = await roadsStore.AddRoad({ ...travelMock });
    expect(result.error).toBe(false);
    expect(result.statusCode).toBe(202);
    expect(result.description).toContain(travelMock.titreroute);
  });

  test('Modifie une route existante avec succès', async () => {
    axiosMock.put.mockResolvedValueOnce({});
    const result = await roadsStore.ModifieRoad({ ...travelMock });
    expect(result.error).toBe(false);
    expect(result.statusCode).toBe(202);
    expect(result.description).toContain(travelMock.titreroute);
  });

  test('Supprime une route avec succès', async () => {
    axiosMock.delete.mockResolvedValueOnce({});
    const result = await roadsStore.DelRoad(travelMock.idroute);
    expect(result.error).toBe(false);
    expect(result.statusCode).toBe(202);
  });

  test("Échec de suppression - idroute invalide", async () => {
    const result = await roadsStore.DelRoad(null);
    expect(result.error).toBe(true);
    expect(result.statusCode).toBe(500);
  });

  test("Ajout échoue - objet null", async () => {
    const result = await roadsStore.AddRoad(null);
    expect(result.error).toBe(true);
    expect(result.statusCode).toBe(500);
  });
});
